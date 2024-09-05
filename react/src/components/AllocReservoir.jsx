import React from 'react'
import { Link } from 'react-router-dom'
const AllocReservoir = () => {
  return (
    <div>
      <Link to='/allocatewater' className='relative bg-yellow-700 text-white top-14 mt-[512px]  left-14 z-5 my-16 rounded-full text-xl px-10 py-3 flex items-center hover:font-bold'>Allocate Reservoir Water</Link>
    </div>
  )
}

export default AllocReservoir
