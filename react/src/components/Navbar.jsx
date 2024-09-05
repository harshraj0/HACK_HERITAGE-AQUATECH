import React from 'react'
import { NavLink } from 'react-router-dom';
import Visualizer from './Visualizer';
const Navbar = () => {
  return (
    <nav className='bg-teal-600 text-white flex justify-between px-4 py-4 items-center absolute w-full bg-opacity-50'>
      <span className=' font-bold text-2xl'>WaterWorth</span>
        <ul className=' flex gap-3 text-lg '>
        
        {/* <a className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold' href="#">About</a>
        <a className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold' href='#'>Estimate Water Usage </a>
        <a className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold' href='#'>Visualizer</a> */}

          <li className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold'><NavLink to="/" >Home</NavLink></li>
          {/* <NavLink to="/visualize" className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold'><Visualizer/></NavLink>   */}
          <li className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold'><Visualizer/></li>
          
          <li className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold'><NavLink to="/calculate" >Calculator</NavLink></li>
          <li className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold'><NavLink to="/climateeval" >Climate Evaluation</NavLink></li>
          <li className='bg-white text-black rounded-full px-3 py-1 hover:text-blue-500 hover:font-bold'><NavLink to="/about" >About</NavLink></li>
      </ul>

    </nav>
  )
}

export default Navbar
