import React from 'react'

const Navbar = () => {
  return (
    <nav navclassName='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div>
                <div className='text-2xl font-bold hidden md:inline'>Joyce</div>
                <div className='space-x-6'>
                    <a href="#home" className='hover:text-gray-400'>Home</a>
                    <a href="#about" className='hover:text-gray-400'>About</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar