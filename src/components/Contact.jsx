import React from 'react'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#F9E6CF]" >Connect with Me</h2>
            <div className="flex-1">
              <h3 className='text-3xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-[#69247C] to-[#e1649e] mb-4'>Let's Connect</h3>
              <p>I'm open to discuss web development projects or partnership opportunities.</p>
            </div>
            {/* Email */}
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-[#DA498D] mr-2'></FaEnvelope>
                <a href="mailto:joycelynpeneira@gmail.com" className='hover:underline'>
                    joycelynpeneira@gmail.com
                </a>
            </div>
            {/* Phone */}
            <div className='mb-4'>
                <FaPhone className='inline-block text-[#DA498D] mr-2'></FaPhone>
                <span>+639163342211</span>
            </div>
            {/* Address */}
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-[#DA498D] mr-2'></FaMapMarkedAlt>
                <span>Rodrizel, Rizal, Philippines</span>
            </div>

            <div className="flex-1">
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-[#DA498D]'
                    placeholder='Enter You Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-[#DA498D]'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-[#DA498D]'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button className='bg-gradient-to-r from-[#69247C] to-[#e1649e] text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>

            </div>
        </div>
        
    </div>
  )
}

export default Contact