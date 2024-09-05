import React, { useState } from 'react'; 
 
// Predefined values 
const WATER_INTENSITY = 50; // liters per ton 
const WATER_RECYCLING_RATE = 0.75; // 75% recycling 
const INDUSTRY_TYPE_FACTOR = 1.2; 
 
function IndustrialWaterCalculator() { 
    const [industrialProduction, setIndustrialProduction] = useState(''); 
    const [waterNeed, setWaterNeed] = useState(null); 
 
    const handleCalculate = () => { 
        if (industrialProduction) { 
            const totalWaterNeed = ( 
                parseFloat(industrialProduction) * 
                WATER_INTENSITY * 
                WATER_RECYCLING_RATE * 
                INDUSTRY_TYPE_FACTOR 
            ).toFixed(2); 
            setWaterNeed(totalWaterNeed); 
        } else { 
            setWaterNeed('Please provide valid input.'); 
        } 
    }; 
 
    return ( 
        <div className='relative mx-2 my-24 px-8 py-4 text-lg bg-teal-100 bg-opacity-70 rounded-2xl h-full border border-blue-950 shadow-md shadow-teal-700 '> 
            <div className='text-2xl font-bold mb-5'>Industrial Water Requirement Calculator</div> 
 
            <div className='my-5'> 
                <label> 
                    Industrial Production (tons): 
                    <input className='border border-black px-1 mx-2 rounded-lg w-32'
                        type="number" 
                        step="0.01" 
                        value={industrialProduction} 
                        onChange={(e) => setIndustrialProduction(e.target.value)} 
                    /> 
                </label> 
            </div> 
            <button className='bg-teal-300 px-2 rounded-md my-5 border-2 border-black' onClick={handleCalculate}>Calculate Water Need</button> 
            {waterNeed !== null && ( 
                <div> 
                    <h3>Total Industrial Water Need:</h3> 
                    <p>{waterNeed} liters</p> 
                </div> 
            )} 
        </div> 
    ); 
} 
 
export default IndustrialWaterCalculator;