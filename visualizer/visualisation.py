import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os
import random
color_list = ['red', 'blue', 'violet', 'green', 'orange']

def color():
    return random.choice(color_list)

plt.switch_backend('Agg')
VISUALS_FOLDER = 'static/visuals'
os.makedirs(VISUALS_FOLDER, exist_ok=True)

def sanitize_filename(filename):
    return filename.replace(' ', '_').replace('/', '_')

def generate_visualizations(df, graph_type):
    visualizations = []
    numerical_columns = df.select_dtypes(include=['number']).columns
    categorical_columns = df.select_dtypes(include=['object', 'category']).columns

    if graph_type == 'histogram':
        for column in numerical_columns:
            safe_column = sanitize_filename(column)
            plt.figure()
            df[column].plot(kind='hist',color=color())
            plt.title(f'Histogram of {column}')
            plt.xlabel(column)
            img_path = os.path.join(VISUALS_FOLDER, f'{safe_column}_hist.png')
            plt.savefig(img_path)
            plt.close()
            visualizations.append(img_path)

    elif graph_type == 'line-graph':
        for column in numerical_columns:
            safe_column = sanitize_filename(column)
            plt.figure()
            df[column].plot(kind='line',color=color())
            plt.title(f'Line Graph of {column}')
            plt.xlabel('Index')
            plt.ylabel(column)
            img_path = os.path.join(VISUALS_FOLDER, f'{safe_column}_line.png')
            plt.savefig(img_path)
            plt.close()
            visualizations.append(img_path)

    elif graph_type == 'boxplot':
        for column in numerical_columns:
            safe_column = sanitize_filename(column)
            plt.figure()
            sns.boxplot(x=df[column],patch_artist=True, boxprops=dict(facecolor=color()))
            plt.title(f'Box Plot of {column}')
            plt.xlabel(column)
            img_path = os.path.join(VISUALS_FOLDER, f'{safe_column}_box.png')
            plt.savefig(img_path)
            plt.close()
            visualizations.append(img_path)

    elif graph_type == 'scatter-plot':
        if len(numerical_columns) >= 2:
            for i in range(len(numerical_columns)):
                for j in range(i + 1, len(numerical_columns)):
                    plt.figure()
                    sns.scatterplot(data=df, x=numerical_columns[i], y=numerical_columns[j],color=color())
                    plt.title(f'Scatter Plot of {numerical_columns[i]} vs {numerical_columns[j]}')
                    plt.xlabel(numerical_columns[i])
                    plt.ylabel(numerical_columns[j])
                    img_path = os.path.join(VISUALS_FOLDER, f'scatter_{sanitize_filename(numerical_columns[i])}_{sanitize_filename(numerical_columns[j])}.png')
                    plt.savefig(img_path)
                    plt.close()
                    visualizations.append(img_path)

    elif graph_type == 'pie':
        for column in categorical_columns:
            plt.figure()
            if len(df[column].unique())<=10:
                df[column].value_counts().plot(kind='pie', autopct='%1.1f%%')
                plt.title(f'Pie Chart of {column}')
                plt.ylabel('')  # Hide the y-label
                img_path = os.path.join(VISUALS_FOLDER, f'{sanitize_filename(column)}_pie.png')
                plt.savefig(img_path)
                plt.close()
                visualizations.append(img_path)

    elif graph_type == 'pairplot':
        if len(numerical_columns) >= 2:
            pair_plot = sns.pairplot(df[numerical_columns])
            pair_plot.fig.suptitle('Pair Plot of Numerical Columns', y=1.02)
            img_path = os.path.join(VISUALS_FOLDER, 'pair_plot.png')
            pair_plot.savefig(img_path)
            visualizations.append(img_path)

    elif graph_type == 'heatmap':
        if len(numerical_columns) >= 2:
            plt.figure()
            sns.heatmap(df[numerical_columns].corr(), annot=True, cmap='coolwarm')
            plt.title('Correlation Heatmap of Numerical Columns')
            img_path = os.path.join(VISUALS_FOLDER, 'correlation_heatmap.png')
            plt.savefig(img_path)
            plt.close()
            visualizations.append(img_path)

    return visualizations
