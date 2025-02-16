import React from 'react'
import profile from '../assets/PENEIRA-2X2.jpg'

 const Home = () => {
  return (
    <div className='bg-black text-white text-center py-16' id="home">
      <img src={profile} alt="" 
        className='mx-auto mb-8 w-45 h-45 rounded-full object-cover transform 
        transition-transform duration-200 hover:scale-110'/>
      <h1 className='text-3xl font-bold'>
            Hi! I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#69247C] 
            to-[#DA498D]'>Joycelyn Peneira</span>
            , Front-end Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
          Focuses on creating responsive and modern websites.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-[#DA498D] to-[#FAC67A] text-black
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect with Me</button>
        </div>
    </div>
  )
}

export default Home