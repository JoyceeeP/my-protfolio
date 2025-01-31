import React from 'react'

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex-1">
                <p className="text-lg mb-8 text-center">
                    I am focus in creating front-end and responsive development. 
                    I am eager to learn and expand my area of experties.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <label htmlFor="htmlandcss" className='w-2/10'> HTML and CSS</label>
                        <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                        <div className="absolute left-0 bg-gradient-to-r from-[#DA498D] to-[#69247C] h-2.5 rounded-full w-10/12"></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="reactjs" className='w-2/10'> React JS</label>
                        <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                        <div className="absolute left-0 bg-gradient-to-r from-[#DA498D] to-[#69247C] h-2.5 rounded-full w-8/12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default About