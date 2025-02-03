import React from 'react'
import profile from '../assets/profile.jpg'
import { HiOutlineMenu,  } from "react-icons/hi";

const Navbar = () => {

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
      };

  return (
    <>
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24 hidden md:flex">
      <div className="container py-3 flex flex-wrap items-center justify-between gap-x-6">
        
        {/* Name */}
        <div className="text-2xl font-bold text-[#F9E6CF]">Joycelyn</div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-purple-300">Home</a>
          <a href="#about" className="hover:text-purple-300">About Me</a>
          <a href="#services" className="hover:text-purple-300">Services</a>
        </div>

        <button className="bg-gradient-to-r from-[#69247C] to-[#DA498D] text-white 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact
        </button>

      </div>
    </nav>
    <div className='w-full p-3.5 bg-black sticky text-white text-[2.5rem] text-end md:hidden flex'
      onClick={toggleMenu}> 
      <HiOutlineMenu />
    </div>
    </>
    
    
  )
}

export default Navbar