import React, { useState } from 'react'; 
 
// Average crop water requirements 
const averageCropWaterRequirements = { 
    kharif: 900, // mm 
    rabi: 400    // mm 
}; 
 
// Predefined values 
const IRRIGATION_FACTOR = 1.2; 
const SEASONAL_FACTOR = 1.1; 
 
function IrrigateCalculator() { 
    const [state, setState] = useState(''); 
    const [type, setType] = useState('urban'); 
    const [population, setPopulation] = useState(''); 
    const [cropType, setCropType] = useState('kharif'); 
    const [areaUnderCultivation, setAreaUnderCultivation] = useState(''); 
    const [domesticResult, setDomesticResult] = useState(null); 
    const [irrigationResult, setIrrigationResult] = useState(null); 
 
    const handleDomesticCalculate = () => { 
        const requirement = waterRequirements[type][state]; 
        if (requirement && population) { 
            const totalRequirement = requirement * parseInt(population, 10); 
            setDomesticResult(totalRequirement.toFixed(2)); 
        } else { 
            setDomesticResult('Please provide valid input.'); 
        } 
    }; 
 
    const handleIrrigationCalculate = () => { 
        const cropWaterRequirement = averageCropWaterRequirements[cropType]; 
        if (cropWaterRequirement && areaUnderCultivation) { 
            const totalIrrigationNeed = ( 
                (cropWaterRequirement / 1000) * // Convert mm to meters for hectare calculation 
                parseFloat(areaUnderCultivation) * 
                IRRIGATION_FACTOR * 
                SEASONAL_FACTOR 
            ).toFixed(2); 
            setIrrigationResult(totalIrrigationNeed); 
        } else { 
            setIrrigationResult('Please provide valid input.'); 
        } 
    }; 
 
    return ( 
        <div className='relative mx-2 my-24 px-8 py-4 text-lg bg-teal-100 bg-opacity-70 rounded-2xl h-full border border-blue-950 shadow-md shadow-teal-700 ' > 
            <div className='text-2xl font-bold mb-5'>Irrigation Water Requirement Calculator</div> 
             
            
 
            
                
                <div className='my-5'> 
                    <label> 
                        Crop Type: 
                        <select className='border border-black mx-12 rounded-lg w-52'
                            value={cropType} 
                            onChange={(e) => setCropType(e.target.value)} 
                        > 
                            <option value="kharif">Kharif</option> 
                            <option value="rabi">Rabi</option> 
                        </select> 
                    </label> 
                </div> 
                <div className='my-5'> 
                    <label > 
                        Area Under Cultivation (hectares): 
                        <input className='border border-black px-1 mx-2 rounded-lg w-32'
                            type="number" 
                            step="0.01" 
                            value={areaUnderCultivation} 
                            onChange={(e) => setAreaUnderCultivation(e.target.value)} 
                        /> 
                    </label> 
                </div> 
                <button className='bg-teal-300 px-2 rounded-md my-5 border-2 border-black' onClick={handleIrrigationCalculate}>Calculate Irrigation Water Need</button> 
                {irrigationResult !== null && ( 
                    <div> 
                        <h3>Total Irrigation Water Need:</h3> 
                        <p>{irrigationResult} cubic meters</p> 
                    </div> 
                )} 
            
        </div> 
    ); 
} 
 
export default IrrigateCalculator;