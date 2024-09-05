

import React, { useState } from 'react';

const PowerBiEmbed = () => {

  const [iframeSrc, setIframeSrc] = useState("https://app.powerbi.com/reportEmbed?reportId=fb135f4c-3cd5-4e35-8ec1-8679f59bc63d&autoAuth=true&ctid=23a21599-83e3-45ed-9e32-d7441e300908");
  const [original, setOriginal] = useState(false)

  const handleLinkChange = () => {
    alert('Wait for the Visuals!!')
    if (original) {
      setIframeSrc("https://app.powerbi.com/reportEmbed?reportId=8b5d6072-39c1-4b60-aa67-c6ac344e34e9&autoAuth=true&ctid=23a21599-83e3-45ed-9e32-d7441e300908");
    }
    else {
      setIframeSrc("https://app.powerbi.com/reportEmbed?reportId=fb135f4c-3cd5-4e35-8ec1-8679f59bc63d&autoAuth=true&ctid=23a21599-83e3-45ed-9e32-d7441e300908")
    }
    setOriginal(!original)
  };

  return (
    <div className='mt-24'>
      <div className='flex gap-96'>
      <div className='text-3xl font-bold mx-2 '>Forecasting Future Water Resources</div>
      <div>
          <button
            className='bg-blue-400 border-2 border-black text-lg text-white font-bold px-4 py-2 h-fit rounded-3xl hover:bg-teal-400'
            onClick={handleLinkChange}
          >
            {original ? "Extreme Conditions " : "Normal Conditions"}
          </button>
        </div>
      </div>
      <div className='flex'>
        <div className='p-10'>
          <iframe
            title="future_forecast_22-26"
            width="1140"
            height="541.25"
            src={iframeSrc}
            frameBorder="0"
            allowFullScreen="true">
          </iframe>
        </div>
        
      </div>
    </div>
  );
};

export default PowerBiEmbed;
