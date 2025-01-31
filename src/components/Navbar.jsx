import React from 'react'

const Navbar = () => {
  return (
    <nav navclassName='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div>
                <div>Joyce</div>
                <div>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar