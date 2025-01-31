import React from 'react'

 const Home = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <h1 className='text-3xl font-bold'>
            {/* I'm*/} {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#69247C] 
            to-[#DA498D]'>Joycelyn Peneira</span>
            <br></br>
            Front-end Developer
        </h1>
        <div className='mt-8 space-x-4'>
          <button className='bg-gradient-to-r from-[#69247C] to-[#DA498D] text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact Me
          </button>
        </div>
    </div>
  )
}

export default Home