import React from 'react'
import AboutMe from '../assets/profile.jpg'

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#F9E6CF]">About Me</h2>

            <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img src={AboutMe} alt='' 
                className="w-72 h-80 rounded object-cover mb-8 md:mb-0"/>
            
                {/* Self Intro */}
            <div className="flex-1">
                <p className="text-lg mb-8 text-center">
                Fullstack Developer passionate about creating responsive, user-friendly websites. 
                I love turning ideas into interactive experiences and continuously expanding my skills in web development.
                I am also open to exploring learning new technologies, and collaborating with teams to build efficient 
                and visually appealing web systems and applications. 
                </p>

                {/* Skills */}
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
                            <div className="absolute left-0 bg-gradient-to-r from-[#DA498D] to-[#69247C] h-2.5 rounded-full w-9/12"></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="reactjs" className='w-2/10'> SQL</label>
                            <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                            <div className="absolute left-0 bg-gradient-to-r from-[#DA498D] to-[#69247C] h-2.5 rounded-full w-7/12"></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="reactjs" className='w-2/10'> PHP</label>
                            <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                            <div className="absolute left-0 bg-gradient-to-r from-[#DA498D] to-[#69247C] h-2.5 rounded-full w-8/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    
  )
}

export default About