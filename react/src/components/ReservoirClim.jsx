import React, { useState } from 'react';

// Example reservoir capacities by state (in cubic meters)
const reservoirData = {

    "Andhra Pradesh": [
        { name: "Srisailam", capacity: 6.013 },
        { name: "Nagarjuna Sagar", capacity: 5.108 },
        { name: "Somasila", capacity: 1.994 },
        { name: "Yeleru", capacity: 0.508 },
        { name: "Kandaleru", capacity: 1.792 },
        { name: "Donkarayi", capacity: 0.376 }
    ],
    "Telangana": [
        { name: "Sriramsagar", capacity: 2.3 },
        { name: "Lower Manair", capacity: 0.621 },
        { name: "Nizam Sagar", capacity: 0.482 },
        { name: "Singur", capacity: 0.822 },
        { name: "Priyadarshini Jurala", capacity: 0.168 }
    ],
    "Bihar": [
        { name: "Chandan Dam", capacity: 0.136 }
    ],
    "Jharkhand": [
        { name: "Tenughat", capacity: 0.821 },
        { name: "Maithon", capacity: 0.471 },
        { name: "Panchet Hill", capacity: 0.184 },
        { name: "Konar", capacity: 0.176 },
        { name: "Tilaiya", capacity: 0.142 },
        { name: "Getalsud", capacity: 0.218 }
    ],
    "Gujarat": [
        { name: "Ukai", capacity: 6.615 },
        { name: "Sabarmati (Dharoi)", capacity: 0.735 },
        { name: "Kadana", capacity: 1.472 },
        { name: "Shetrunji", capacity: 0.3 },
        { name: "Bhadar", capacity: 0.188 },
        { name: "Damanganga", capacity: 0.502 },
        { name: "Dantiwada", capacity: 0.399 },
        { name: "Panam", capacity: 0.697 },
        { name: "Sardar Sarovar", capacity: 5.76 },
        { name: "Karjan", capacity: 0.523 },
        { name: "Sukhi (Guj)", capacity: 0.167 },
        { name: "Watrak", capacity: 0.154 },
        { name: "Hathmati", capacity: 0.153 }
    ],
    "Himachal Pradesh": [
        { name: "Gobind Sagar (Bhakra)", capacity: 6.229 },
        { name: "Pong Dam (Beas)", capacity: 6.157 },
        { name: "Kol Dam", capacity: 0.089 }
    ],
    "Karnataka": [
        { name: "Krishnaraja Sagara", capacity: 1.163 },
        { name: "Tungabhadra", capacity: 3.276 },
        { name: "Ghataprabha (Hidkal)", capacity: 1.391 },
        { name: "Bhadra", capacity: 1.785 },
        { name: "Linganamakki", capacity: 4.294 },
        { name: "Narayanpur", capacity: 0.863 },
        { name: "Malaprabha (Renuka)", capacity: 0.972 },
        { name: "Kabini", capacity: 0.444 },
        { name: "Hemavathy", capacity: 0.927 },
        { name: "Harangi", capacity: 0.22 },
        { name: "Supa", capacity: 4.12 },
        { name: "Vani Vilas Sagar", capacity: 0.802 },
        { name: "Almatti", capacity: 3.105 },
        { name: "Gerusoppa", capacity: 0.13 },
        { name: "Mani Dam", capacity: 0.884 },
        { name: "Tattihalla", capacity: 0.249 }
    ],
    "Kerala": [
        { name: "Kallada (Parappar)", capacity: 0.507 },
        { name: "Idamalayar", capacity: 1.018 },
        { name: "Idukki", capacity: 1.46 },
        { name: "Kakki", capacity: 0.447 },
        { name: "Periyar", capacity: 0.173 },
        { name: "Malampuzha", capacity: 0.224 }
    ],
    "Madhya Pradesh": [
        { name: "Gandhi Sagar", capacity: 6.827 },
        { name: "Tawa", capacity: 1.944 },
        { name: "Bargi", capacity: 3.18 },
        { name: "Bansagar", capacity: 5.166 },
        { name: "Indira Sagar", capacity: 9.745 },
        { name: "Barna Dam", capacity: 0.456 },
        { name: "Omkareshwar", capacity: 0.299 },
        { name: "Sanjay Sarovar", capacity: 0.508 },
        { name: "Rajghat Dam", capacity: 1.945 },
        { name: "Kolar Dam", capacity: 0.27 },
        { name: "Atal Sagar (Madikheda)", capacity: 0.835 }
    ],
    "Chhattisgarh": [
        { name: "Minimata Bango", capacity: 3.046 },
        { name: "Mahanadi", capacity: 0.767 },
        { name: "Dudhawa", capacity: 0.284 },
        { name: "Tandula", capacity: 0.312 }
    ],
    "Maharashtra": [
        { name: "Jayakwadi (Paithan)", capacity: 2.171 },
        { name: "Koyana", capacity: 2.652 },
        { name: "Bhima (Ujjani)", capacity: 1.517 },
        { name: "Isapur", capacity: 0.965 },
        { name: "Mula", capacity: 0.609 },
        { name: "Yeldari", capacity: 0.809 },
        { name: "Girna", capacity: 0.524 },
        { name: "Khadakvasla", capacity: 0.056 },
        { name: "Upper Vaitarna", capacity: 0.331 },
        { name: "Upper Tapi", capacity: 0.255 },
        { name: "Pench (Totladoh)", capacity: 1.091 },
        { name: "Upper Wardha", capacity: 0.564 },
        { name: "Bhatsa", capacity: 0.942 },
        { name: "Dhom", capacity: 0.331 },
        { name: "Dudhganga", capacity: 0.664 },
        { name: "Manikdoh", capacity: 0.288 },
        { name: "Bhandardara", capacity: 0.304 },
        { name: "Urmodi", capacity: 0.273 },
        { name: "Bhatghar", capacity: 0.673 },
        { name: "Nira Deoghar", capacity: 0.332 },
        { name: "Thokarwadi", capacity: 0.353 },
        { name: "Kanher", capacity: 0.272 },
        { name: "Mulshi", capacity: 0.572 },
        { name: "Surya", capacity: 0.276 },
        { name: "Tillari", capacity: 0.447 },
        { name: "Dimbhe Dam", capacity: 0.354 },
        { name: "Veer Dam", capacity: 0.266 },
        { name: "Barvi Dam", capacity: 0.339 },
        { name: "Chaskaman", capacity: 0.215 },
        { name: "Panshet (Tanajisagar)", capacity: 0.302 },
        { name: "Bhama Askhed", capacity: 0.217 },
        { name: "Darna Dam", capacity: 0.202 }
    ],
    "Nagaland": [
        { name: "Doyang Hep", capacity: 0.535 }
    ],
    "Odisha": [
        { name: "Hirakud", capacity: 5.378 },
        { name: "Balimela", capacity: 2.676 },
        { name: "Salanadi", capacity: 0.558 },
        { name: "Rengali", capacity: 3.432 },
        { name: "Machkund (Jalaput)", capacity: 0.893 },
        { name: "Upper Kolab", capacity: 0.935 },
        { name: "Upper Indravati", capacity: 1.456 },
        { name: "Sapua", capacity: 0.006 },
        { name: "Hariharjhor", capacity: 0.059 },
        { name: "Mandira Dam", capacity: 0.309 }
    ],
    "Sikkim": [
        { name: "Teesta", capacity: 1.175 }
    ],
    "Punjab": [
        { name: "Thein Dam", capacity: 2.344 }
    ],
    "Rajasthan": [
        { name: "Mahi Bajaj Sagar", capacity: 1.711 },
        { name: "Jhakam", capacity: 0.132 },
        { name: "Rana Pratap Sagar", capacity: 1.436 },
        { name: "Bisalpur", capacity: 1.076 },
        { name: "Jawai Dam", capacity: 0.193 },
        { name: "Jaisamand", capacity: 0.296 }
    ],
    "Tamil Nadu": [
        { name: "Lower Bhawani", capacity: 0.792 },
        { name: "Mettur (Stanley)", capacity: 2.647 },
        { name: "Vaigai", capacity: 0.172 },
        { name: "Parambikulam", capacity: 0.38 },
        { name: "Aliyar", capacity: 0.095 },
        { name: "Sholayar", capacity: 0.143 },
        { name: "Sathanur", capacity: 0.207 }
    ],
    "Tripura": [
        { name: "Gumti", capacity: 0.312 }
    ],
    "Uttar Pradesh": [
        { name: "Matatila", capacity: 0.707 },
        { name: "Rihand", capacity: 5.649 },
        { name: "Sharda Sagar", capacity: 0.33 },
        { name: "Sirsi", capacity: 0.19 },
        { name: "Maudaha", capacity: 0.179 },
        { name: "Jirgo", capacity: 0.147 },
        { name: "Rangawan", capacity: 0.155 },
        { name: "Meja", capacity: 0.299 }
    ],
    "Uttarakhand": [
        { name: "Ramganga", capacity: 2.196 },
        { name: "Tehri", capacity: 2.615 },
        { name: "Nanak Sagar", capacity: 0.176 }
    ],
    "West Bengal": [
        { name: "Mayurakshi", capacity: 0.48 },
        { name: "Kangsabati", capacity: 0.914 }
    ]
};







const ReservoirClim = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedReservoir, setSelectedReservoir] = useState('');
    const [precipitation, setPrecipitation] = useState();
    const [temperature, setTemperature] = useState();
    const [evaporation, setEvaporation] = useState();
    const [timePeriodMonths, setTimePeriodMonths] = useState(); // Time period in months

    const [capacityChangePercentage, setCapacityChangePercentage] = useState(null);

    // Define weights
    const wP = 0.01;
    const wT = 0.005;
    const wE = 0.01;
    const wS = 0.002;
    const wL = 0.003;
    const wTP = 0.0005;

    // Calculate base capacity based on selected reservoir
    const reservoirList = reservoirData[selectedState] || [];
    const selectedReservoirData = reservoirList.find(reservoir => reservoir.name === selectedReservoir);
    const baseCapacity = selectedReservoirData ? selectedReservoirData.capacity : 0; // Default to 0 if no reservoir selected

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setSelectedReservoir('');
        setCapacityChangePercentage(null);
    };

    const handleReservoirChange = (event) => {
        setSelectedReservoir(event.target.value);
    };

    const calculateCapacityChange = () => {
        if (!baseCapacity) {
            setCapacityChangePercentage('Please select a valid reservoir.');
            return;
        }

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

            <div className='mb-4 text-base'>
                <label>Select State: </label>
                <select className='border border-black rounded-md px-1 mx-20' value={selectedState} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {Object.keys(reservoirData).map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            {selectedState && (
                <div className='mb-4 text-base'>
                    <label>Select Reservoir: </label>
                    <select className='border border-black rounded-md px-1 mx-12' value={selectedReservoir} onChange={handleReservoirChange}>
                        <option value="">Select Reservoir</option>
                        {reservoirData[selectedState].map(reservoir => (
                            <option key={reservoir.name} value={reservoir.name}>{reservoir.name}</option>
                        ))}
                    </select>
                </div>
            )}

            <div className='mb-4 text-base'>
                <label>Precipitation: </label>
                <input className='border border-black rounded-md px-1 mx-16' type="number" value={precipitation} onChange={(e) => setPrecipitation(e.target.value)} />
            </div>
            <div className='mb-4 text-base'>
                <label>Temperature: </label>
                <input className='border border-black rounded-md px-1 mx-16' type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
            <div className='mb-4 text-base'>
                <label>Evaporation: </label>
                <input className='border border-black rounded-md px-1 mx-16' type="number" value={evaporation} onChange={(e) => setEvaporation(e.target.value)} />
            </div>


            <div className='mb-4 text-base'>
                <label>Time Period (months): </label>
                <input className='border border-black rounded-md px-1 mx-2' type="number" value={timePeriodMonths} onChange={(e) => setTimePeriodMonths(e.target.value)} />
            </div>

            <button className='bg-teal-300 px-2 font-bold rounded-md my-5 border-2 border-black' onClick={calculateCapacityChange}>Calculate</button>

            {capacityChangePercentage !== null && (
                <div>
                    <div className='font-bold'>Capacity Change Percentage: {capacityChangePercentage}%</div>

                    {selectedReservoir && <div className='font-bold'>Reservoir: {selectedReservoir}</div>}
                </div>
            )}
        </div>
    );
};

export default ReservoirClim;