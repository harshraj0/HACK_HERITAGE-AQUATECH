import React, { useState } from 'react';

const Climate = () => {
    const [baseCapacity, setBaseCapacity] = useState(); // Default base capacity
    const [precipitation, setPrecipitation] = useState();
    const [temperature, setTemperature] = useState();
    const [evaporation, setEvaporation] = useState();
    const [seasonalFactor, setSeasonalFactor] = useState();
    const [landUseFactor, setLandUseFactor] = useState();
    const [timePeriodMonths, setTimePeriodMonths] = useState(); // Time period in months
    const [capacityChangePercentage, setCapacityChangePercentage] = useState(null);

    // Define weights
    const wP = 0.1;
    const wT = 0.05;
    const wE = 0.07;
    const wS = 0.03;
    const wL = 0.02;
    const wTP = 0.01; // Weight per month for the time period factor

    const calculateCapacityChange = () => {
        // Calculate capacity change
        const capacityChange = baseCapacity 
            + (precipitation * wP) 
            - (temperature * wT) 
            - (evaporation * wE) 
            + (1.2 * wS) 
            + (.8 * wL) 
            + (timePeriodMonths * wTP); // Include time period factor

        const changePercentage = ((capacityChange - baseCapacity) / baseCapacity) * 100;

        setCapacityChangePercentage(changePercentage.toFixed(2));
    };

    return (
        <div className='w-2/5 mx-6 my-24 px-8 py-4 bg-teal-100 bg-opacity-70 rounded-2xl h-[80vh] border border-blue-950 shadow-md shadow-teal-700  '>
            <div className='text-xl font-bold mb-4'>Reservoir Capacity Change Calculator</div>
            <form onSubmit={(e) => { e.preventDefault(); calculateCapacityChange(); }}>
                <div className='mb-4 text-base'>
                    <label>
                        Base Capacity (cubic meters):
                        <input className='border border-black rounded-md px-1 mx-2'
                            type="number"
                            value={baseCapacity}
                            onChange={(e) => setBaseCapacity(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div className='mb-4 text-base'>
                    <label>
                        Precipitation (mm):
                        <input className='border border-black rounded-md px-1 mx-20'
                            type="number"
                            value={precipitation}
                            onChange={(e) => setPrecipitation(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div className='mb-4 text-base'>
                    <label>
                        Temperature (°C):
                        <input className='border border-black rounded-md px-1 mx-20'
                            type="number"
                            value={temperature}
                            onChange={(e) => setTemperature(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div className='mb-4 text-base'>
                    <label>
                        Evaporation (mm):
                        <input className='border border-black rounded-md px-1 mx-20'
                            type="number"
                            value={evaporation}
                            onChange={(e) => setEvaporation(Number(e.target.value))}
                        />
                    </label>
                </div>
                
                
                <div className='mb-4 text-base'>
                    <label>
                        Time Period (months):
                        <input className='border border-black rounded-md px-1 mx-14'
                            type="number"
                            step="1"
                            value={timePeriodMonths}
                            onChange={(e) => setTimePeriodMonths(Number(e.target.value))}
                        />
                    </label>
                </div>
                <button className='bg-teal-300 px-2 font-bold rounded-md my-5 border-2 border-black' type="submit">Calculate</button>
            </form>
            {capacityChangePercentage !== null && (
                <div>
                    <div className='font-bold'>Calculated Capacity Change Percentage:</div>
                    <p>{capacityChangePercentage}% change is expected</p>
                </div>
            )}
        </div>
    );
};

export default Climate;

