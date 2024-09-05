import React, { useState } from 'react';

// Assuming these dictionaries are imported or available in the file
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
      { name: "Kangsabati", capacity: 0.914 }
    ]
  };
// data.js
 const irrigationPercentages = {
    'Andhra Pradesh': 86.1,
    'Arunachal Pradesh': 50.0,
    'Assam': 78.33,
    'Bihar': 73.67,
    'Chhattisgarh': 84.7,
    'Delhi': 23.53,
    'Goa': 36.76,
    'Gujarat': 92.38,
    'Haryana': 89.41,
    'Himachal Pradesh': 51.43,
    'Jharkhand': 52.22,
    'Karnataka': 89.13,
    'Kerala': 41.03,
    'Madhya Pradesh': 90.16,
    'Maharashtra': 91.72,
    'Manipur': 42.5,
    'Meghalaya': 28.57,
    'Mizoram': 0.0,
    'Nagaland': 11.35,
    'Odisha': 80.65,
    'Punjab': 94.93,
    'Rajasthan': 85.42,
    'Sikkim': 75.0,
    'Tamil Nadu': 93.48,
    'Telangana': 89.49,
    'Tripura': 27.27,
    'Uttar Pradesh': 88.19,
    'Uttarakhand': 70.53,
    'West Bengal': 83.94,
    'Andaman And Nicobar': 1.25,
    'Chandigarh': 21.62,
    'Dadra & Nagar Haveli': 9.09,
    'Daman & Diu': 5.26,
    'Jammu And Kashmir': 29.63,
    'Ladakh': 0.0,
    'Lakshadweep': 0.0,
    'Puducherry': 53.85
};
// data.js
 const industrialPercentages = {
    'Andhra Pradesh': 1.87,
    'Arunachal Pradesh': 1.5,
    'Assam': 0.38,
    'Bihar': 2.69,
    'Chhattisgarh': 2.26,
    'Delhi': 0.21,
    'Goa': 7.35,
    'Gujarat': 1.29,
    'Haryana': 5.25,
    'Himachal Pradesh': 14.29,
    'Jharkhand': 11.67,
    'Karnataka': 1.15,
    'Kerala': 0.37,
    'Madhya Pradesh': 0.88,
    'Maharashtra': 0.18,
    'Manipur': 0.5,
    'Meghalaya': 0.43,
    'Mizoram': 0.0,
    'Nagaland': 0.1,
    'Odisha': 2.44,
    'Punjab': 0.86,
    'Rajasthan': 0.78,
    'Sikkim': 8.33,
    'Tamil Nadu': 1.04,
    'Telangana': 4.33,
    'Tripura': 0.27,
    'Uttar Pradesh': 0.95,
    'Uttarakhand': 12.63,
    'West Bengal': 1.4,
    'Andaman And Nicobar': 12.5,
    'Chandigarh': 5.41,
    'Dadra & Nagar Haveli': 81.82,
    'Daman & Diu': 96.49,
    'Jammu And Kashmir': 4.63,
    'Ladakh': 0.67,
    'Lakshadweep': 0.0,
    'Puducherry': 7.69
};
// data.js
 const domesticPercentages = {
    'Andhra Pradesh': 12.03,
    'Arunachal Pradesh': 50.0,
    'Assam': 20.91,
    'Bihar': 23.71,
    'Chhattisgarh': 13.04,
    'Delhi': 76.47,
    'Goa': 55.88,
    'Gujarat': 6.4,
    'Haryana': 5.25,
    'Himachal Pradesh': 34.29,
    'Jharkhand': 36.11,
    'Karnataka': 9.72,
    'Kerala': 58.24,
    'Madhya Pradesh': 8.91,
    'Maharashtra': 8.16,
    'Manipur': 50.0,
    'Meghalaya': 57.14,
    'Mizoram': 100.0,
    'Nagaland': 100.0,
    'Odisha': 16.91,
    'Punjab': 4.24,
    'Rajasthan': 13.8,
    'Sikkim': 16.67,
    'Tamil Nadu': 5.48,
    'Telangana': 6.06,
    'Tripura': 72.73,
    'Uttar Pradesh': 10.86,
    'Uttarakhand': 17.89,
    'West Bengal': 14.66,
    'Andaman And Nicobar': 87.5,
    'Chandigarh': 70.27,
    'Dadra & Nagar Haveli': 9.09,
    'Daman & Diu': 0.0,
    'Jammu And Kashmir': 65.74,
    'Ladakh': 100.0,
    'Lakshadweep': 100.0,
    'Puducherry': 38.46
};

function AllocWaterfile() {
    const [selectedState, setSelectedState] = useState('');
    const [reservoirs, setReservoirs] = useState([]);
    const [allocations, setAllocations] = useState(null);

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setReservoirs(reservoirData[state] || []);
        setAllocations(null);
    };

    const handleAllocate = () => {
        if (!selectedState) return;

        const totalCapacity = reservoirs.reduce((sum, reservoir) => sum + reservoir.capacity, 0);

        const irrigationPercent = irrigationPercentages[selectedState] || 0;
        const industrialPercent = industrialPercentages[selectedState] || 0;
        const domesticPercent = domesticPercentages[selectedState] || 0;

        const irrigationAllocation = (totalCapacity * irrigationPercent) / 100;
        const industrialAllocation = (totalCapacity * industrialPercent) / 100;
        const domesticAllocation = (totalCapacity * domesticPercent) / 100;

        setAllocations({
            irrigation: irrigationAllocation,
            industrial: industrialAllocation,
            domestic: domesticAllocation
        });
    };

    return (
        <div className=' w-1/3 mt-20 px-5 py-3 rounded-md bg-red-300 bg-opacity-45 h-100vh mx-14'>
            <div className='text-3xl font-bold my-4'>Water Allocation by State</div>
            <label className='font-bold my-4 text-lg' htmlFor="state">Select State:</label>
            <select className='border border-black px-1 mx-2 rounded-lg w-32 my-4' id="state" value={selectedState} onChange={handleStateChange}>
                <option value="">Select...</option>
                {Object.keys(reservoirData).map(state => (
                    <option key={state} value={state}>{state}</option>
                ))}
            </select>

            {selectedState && (
                <div>
                    <div className='font-bold text-xl my-4'>Reservoirs in {selectedState}</div>
                    <ul className='text-lg my-4'>
                        {reservoirs.map(reservoir => (
                            <li key={reservoir.name}>{reservoir.name}: {reservoir.capacity} million cubic meters</li>
                        ))}
                    </ul>
                    
                    <button className='bg-teal-500 font-bold border-2 px-4 rounded-md border-black my-2 text-lg' onClick={handleAllocate}>Allocate</button>

                    {allocations && (
                        <div className='text-lg my-4'>
                            <div className='font-bold text-xl'>Allocations</div>
                            <p>Irrigation: {allocations.irrigation.toFixed(2)} million cubic meters</p>
                            <p>Industrial: {allocations.industrial.toFixed(2)} million cubic meters</p>
                            <p>Domestic: {allocations.domestic.toFixed(2)} million cubic meters</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default AllocWaterfile;
