import React from 'react'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
            <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
           from-[#69247C] to-[#e1649e] mb-4'>Let's Talk</h3>
            </div>
            {/* <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-[#DA498D] mr-2'></FaEnvelope>
                <a href="mailto:joycelynpeneira@gmail.com" className='hover:underline'>
                    joycelynpeneira@gmail.com
                </a>
            </div> */}
        </div>
        
    </div>
  )
}

export default Contact