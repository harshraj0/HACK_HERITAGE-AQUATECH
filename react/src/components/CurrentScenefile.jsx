import React from 'react'
const CurrentScenefile = () => {
  return (
    <div className='mt-20'>
      <div className='text-3xl font-bold flex justify-center'>CurrentScenario</div>
      <div className='mt-5 mb-4'>
        <iframe title="current_report_22_23" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=5c653b58-a736-428f-b2c4-78e58dddaec5&autoAuth=true&ctid=23a21599-83e3-45ed-9e32-d7441e300908" frameborder="0" allowFullScreen="true"></iframe>
        </div>
        <div className='mx-10 text-blue-800'>
        <a href="https://cgwb.gov.in/dynamic-ground-water-resources-india">Source: </a>
        <a href="https://cgwb.gov.in/dynamic-ground-water-resources-india">(https://cgwb.gov.in/dynamic-ground-water-resources-india)</a>
        </div>
    </div>
  );
};
export default CurrentScenefile;