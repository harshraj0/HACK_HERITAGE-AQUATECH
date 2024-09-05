import os

from flask import Flask, render_template, request, send_from_directory,session,redirect
import pandas as pd
import re
from visualisation import generate_visualizations

color_list = ['red', 'blue', 'violet', 'green', 'orange']

def generate_random_color():
    return random.choice(color_list)

UPLOAD_FOLDER = 'uploads'
VISUALS_FOLDER = 'static/visuals/'
def sanitize_filename(filename):
  # Remove any special characters and replace spaces with underscores
  filename = re.sub(r'[^\w\s-]', '', filename).strip().lower()
  filename = re.sub(r'[-\s]+', '_', filename)
  return filename



app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['VISUALS_FOLDER'] = VISUALS_FOLDER
app.secret_key = 'itzayush21'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template("index.html")

@app.route('/visualize', methods=['GET', 'POST'])
def visualize():
  if request.method == 'POST':
    file = request.files['file']
    if file:
        filename = sanitize_filename(file.filename)
        filename = file.filename
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        session['file_path'] = file_path
        session['filename'] = filename
        
      
        return render_template('index.html',f=filename)
  return render_template('index.html')




@app.route('/setGraphType', methods=['GET', 'POST'])
def setGraphType():
    file_path = session.get('file_path')
    filename = session.get('filename')
    if request.method == 'POST':
        graph_type = request.form['type']

        if file_path:
            if file_path.endswith('.csv'):
                df = pd.read_csv(file_path)
            elif file_path.endswith('.xlsx'):
                df = pd.read_excel(file_path)
            else:
                return "Unsupported file format"
        v=generate_visualizations(df,graph_type)
        return render_template('index.html', v=v,f=filename)
    return render_template('index.html')


@app.route('/reset', methods=['POST'])
def reset():
    # Delete the uploaded data file
    file_path = session.get('file_path')
    if file_path and os.path.exists(file_path):
        os.remove(file_path)

    # Delete all generated visualizations
    for filename in os.listdir(app.config['VISUALS_FOLDER']):
        file_path = os.path.join(app.config['VISUALS_FOLDER'], filename)
        try:
            if os.path.isfile(file_path):
                os.remove(file_path)
        except Exception as e:
            print(f"Error: {e}")

    # Clear the session
    session.pop('file_path', None)

    return redirect('/')


@app.route('/download/<path:filename>')
def download_file(filename):
    return send_from_directory(app.config['VISUALS_FOLDER'], filename, as_attachment=True)
    
if __name__ == '__main__':
  app.run(debug=True)