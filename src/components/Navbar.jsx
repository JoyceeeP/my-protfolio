import React from 'react'
import profile from '../assets/profile.jpg'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="container py-3 flex flex-wrap items-center justify-between gap-x-4">
        
        {/* Name */}
        <div className="text-2xl font-bold text-[#F9E6CF]">Joycelyn</div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <a href="#home" className="hover:text-purple-300">Home</a>
          <a href="#about" className="hover:text-purple-300">About Me</a>
          <a href="#project" className="hover:text-purple-300">Projects</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </div>

        <button className="bg-gradient-to-r from-[#69247C] to-[#DA498D] text-white 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact
        </button>

      </div>
    </nav>
    
  )
}

export default Navbar