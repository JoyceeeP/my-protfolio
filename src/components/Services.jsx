import React from 'react'
const service = [
    {
      id: 1,
      title: "Web Designing",
      description: "Crafting beautiful, user-friendly websites that engage your audience.",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building dynamic and responsive interfaces for seamless user experiences.",
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Powering your applications with robust server-side logic and efficient database management.",
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description: "Seamlessly integrating frontend and backend expertise for comprehensive web solutions.",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Elevate your brand visibility and reach your target audience with my strategic digital marketing solutions.",
    },
  ];

const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#F9E6CF]">Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {service.map(service => (
                    <div key ={service.id}
                        className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg 
                        transform transition-transform duration-300 hover:scale-105">
                    <div
                        className="text-right text-2xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-[#DA498D] to-[#69247C]">
                        {service.id}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-[#69247C] to-[#DA498D]">
                        {service.title}
                    </h3>
                    <p className="mt-2 text-gray-300">{service.description}</p>
                    <a href="#" className="mt-4 inline-block text-[#DA498D] hover:text-[#FAC67A]">Read More</a>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Services