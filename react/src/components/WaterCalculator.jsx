
import React, { useState } from 'react'; 
 
// Data for per capita water requirements 
const waterRequirements = { 
    urban: { 
        "Delhi": 175.0,
    "Maharashtra": 165.3, // Average for Mumbai and Pune
    "West Bengal": 142.5, // Kolkata
    "Karnataka": 165.0, // Bengaluru
    "Tamil Nadu": 142.5, // Chennai
    "Telangana": 165.0, // Hyderabad
    "Gujarat": 142.5, // Ahmedabad
    "Rajasthan": 142.5, // Jaipur
    "Madhya Pradesh": 142.5, // Indore
    "Punjab": 165.0, // Chandigarh
    "Haryana": 165.0, // Gurugram
    "Kerala": 142.5, // Kochi
    "Bihar": 142.5, // Patna
    "Odisha": 142.5, // Bhubaneswar
    "Assam": 142.5, // Guwhati
    "Jharkhand": 142.5, // Ranchi
    "Chhattisgarh": 142.5, // Raipur
    "Himachal Pradesh": 142.5, // Shimla
    "Uttarakhand": 142.5, // Dehradun
    "Goa": 165.0, // Panaji
    "Jammu & Kashmir": 142.5, // Srinagar
    "Sikkim": 142.5, // Gangtok
    "Meghalaya": 142.5, // Shillong
    "Nagaland": 142.5, // Kohima
    "Manipur": 142.5, // Imphal
    "Mizoram": 142.5, // Aizawl
    "Tripura": 142.5, // Agartala
    "Arunachal Pradesh": 142.5 // Itanagar

    }, 
    rural: { 
        "Maharashtra": 157.65, 
        "Uttar Pradesh": 142.75, 
        "Kerala": 142.85, 
        "Bihar": 142.90, 
        "Odisha": 142.55, 
        "Assam": 142.60, 
        "Jharkhand": 142.45, 
        "Chhattisgarh": 142.80, 
        "Himachal Pradesh": 142.70, 
        "Uttarakhand": 142.65, 
        "Jammu & Kashmir": 142.90, 
        "Sikkim": 142.75, 
        "Meghalaya": 142.60, 
        "Nagaland": 142.85, 
        "Manipur": 142.75, 
        "Mizoram": 142.90, 
        "Tripura": 142.65, 
        "Arunachal Pradesh": 142.55 
    } 
}; 
 
function WaterCalculator() { 
    const [state, setState] = useState(''); 
    const [type, setType] = useState('urban'); 
    const [population, setPopulation] = useState(''); 
    const [result, setResult] = useState(null); 
    
    const handleCalculate = () => { 
        const requirement = waterRequirements[type][state]; 
        if (requirement && population) { 
            const totalRequirement = requirement * parseInt(population, 10); 
            setResult(totalRequirement.toFixed(2)); 
        } else { 
            setResult('Please provide valid input.'); 
        } 
    }; 
 
    return ( 
        <div className='relative mx-2 my-24 px-8 py-4 text-lg bg-teal-100 bg-opacity-70 rounded-2xl h-full border border-blue-950 shadow-md shadow-teal-700 ' > 
            <div className='text-2xl font-bold mb-5'>Domestic Water Requirement Calculator</div>
            <div className='my-5'> 
                <label> 
                    State: 
                    <input className='border border-black mx-12 rounded-lg px-1'
                        type="text" 
                        value={state} 
                        onChange={(e) => setState(e.target.value)} 
                    /> 
                </label> 
            </div> 
            <div className='my-5'> 
                <label> 
                    Type: 
                    <select className='border border-black mx-12 rounded-lg w-52'
                        value={type} 
                        onChange={(e) => setType(e.target.value)} 
                    > 
                        <option value="urban">Urban</option> 
                        <option value="rural">Rural</option> 
                    </select> 
                </label> 
            </div> 
            <div className='my-5'> 
                <label> 
                    Population: 
                    <input className='border border-black mx-1 rounded-lg'
                        type="number" 
                        value={population} 
                        onChange={(e) => setPopulation(e.target.value)} 
                    /> 
                </label> 
            </div > 
            <button className='bg-teal-300 px-2 rounded-md my-5 border-2 border-black' onClick={handleCalculate}>Calculate</button> 
            {result !== null && ( 
                <div> 
                    <h2>Total Domestic Water Requirement:</h2> 
                    <p>{result} liters</p> 
                </div> 
            )} 
        </div> 
    ); 
} 
 
export default WaterCalculator;