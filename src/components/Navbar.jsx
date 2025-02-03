import React, { useState } from 'react'
import profile from '../assets/profile.jpg'
import { HiOutlineMenu,  } from "react-icons/hi";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a navigation item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
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
          <a href="#contact" className="hover:text-purple-300">Contacts</a>
        </div>
      </div>
    </nav>

    {/* Menu Button */}
    <div className='w-full p-3.5 top-0 bg-black sticky text-[#FAC67A] text-[2.5rem] text-end md:hidden flex'
      onClick={toggleMenu}> 
      <HiOutlineMenu />
    </div>

     {/* Mobile menu overlay - Conditionally rendered based on `isMenuOpen` */}
     {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50">
          <div className="flex flex-col items-center text-white py-20">
            <a href="#home" className="p-5 hover:text-purple-300" onClick={closeMenu}>Home</a>
            <a href="#about" className="p-5 hover:text-purple-300" onClick={closeMenu}>About Me</a>
            <a href="#services" className="p-5 hover:text-purple-300" onClick={closeMenu}>Services</a>
            <a href="#contact" className="p-5 hover:text-purple-300" onClick={closeMenu}>Contacts</a>
          </div>
        </div>
      )}
    </>
    
    
  )
}

export default Navbar