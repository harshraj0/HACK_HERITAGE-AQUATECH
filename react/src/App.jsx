// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Description from './components/Description';
import BackgroundChange from './components/BackgroundChange';
import About from './components/About';
import Forecast from './components/Forecast';
import PowerBiEmbed from './components/PowerBiEmbed';
import CurrentScene from './components/CurrentScene';
import CurrentScenefile from './components/CurrentScenefile';

import WaterCalculator from './components/WaterCalculator';
import IndustrialWaterCalculator from './components/IndustrialWaterCalculator';
import IrrigateCalculator from './components/IrriagteCalculator';
import Forecastdesc from './components/Forecastdesc';
import CurrSceneDesc from './components/CurrSceneDesc';
import AllocReservoir from './components/AllocReservoir';
import AllocWaterfile from './components/AllocWaterfile';
import MapIndia from './components/MapIndia';
import Climate from './components/Climate';
import ReservoirClim from './components/ReservoirClim';
function App() {
  return (
    <Router>
      <div className='relative'>
        <Routes>
          {/* Home route displays the main content of the App */}
          <Route
            path="/"
            element={
              <>
                <BackgroundChange />
                <Navbar />
                
                <Description />
                
                <div className='flex gap-3'>
                <Forecast/>
                
                <CurrentScene/>
                <AllocReservoir/>
                </div>
              </>
            }
          />

         
          <Route path="/about" element={<About />} />
          <Route path="/powerBiEmbed" element={<><Navbar /><div className='flex'><PowerBiEmbed /><Forecastdesc/></div></>} />
          <Route path="/currentscene" element={<><Navbar /><div className='flex'><CurrentScenefile /><CurrSceneDesc/></div></>} />
          {/* <Route path="/visualize" element={<><Navbar /><Visualizer /></>} /> */}
          <Route path="/calculate" element={<><Navbar /><div className='flex'><div className="w-1/3 "><WaterCalculator /></div><div className='w-1/3'><IndustrialWaterCalculator/></div><div><IrrigateCalculator/></div></div></>} />

          <Route path="/climateeval" element={<><Navbar /><div className='flex gap-72'><Climate/><ReservoirClim/></div></>} />

          <Route path="/allocatewater" element={<><Navbar /><div className='flex'><AllocWaterfile/><MapIndia/></div></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;