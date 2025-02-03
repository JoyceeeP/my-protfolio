import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  return (

    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#F9E6CF]">Reach Out to Me</h2>
        <p className='text-1xl font-bold text-center mb-8 text-white'>I'm open to discussing web development projects or partnership opportunities.</p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#69247C] to-[#e1649e]">
              Let's Connect
            </h3>
            

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope className="text-[#DA498D] mr-2" />
                <a href="mailto:joycelynpeneira@gmail.com" className="hover:underline">
                  joycelynpeneira@gmail.com
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center">
                <FaPhone className="text-[#DA498D] mr-2" />
                <span>+639163342211</span>
              </div>
              {/* Address */}
              <div className="flex items-center">
                <FaMapMarkedAlt className="text-[#DA498D] mr-2" />
                <span>Rodriguez, Rizal, Philippines</span>
              </div>
            </div>
          </div>

          {/* Right: Social Media Links */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#69247C] to-[#e1649e]">
              Follow Me
            </h3>
            <p>Stay updated with my latest projects and activities.</p>

            <div className="space-y-4">
              {/* Facebook */}
              <div className="flex items-center">
                <FaFacebook className="text-[#DA498D] text-xl mr-2" />
                <a href="https://facebook.com/JoycePeneira.me" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Joyce Peneira
                </a>
              </div>
              {/* Instagram */}
              <div className="flex items-center">
                <FaInstagram className="text-[#DA498D] text-xl mr-2" />
                <a href="https://www.instagram.com/joyceee__chan" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Joyce Peneira
                </a>
              </div>
              {/* LinkedIn */}
              <div className="flex items-center">
                <FaLinkedin className="text-[#DA498D] text-xl mr-2" />
                <a href="https://linkedin.com/in/Joycelyn_Peneira" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Joycelyn Peneira
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Your Name</label>
              <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#DA498D]" placeholder="Enter Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#DA498D]" placeholder="Enter Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#DA498D]" rows="5" placeholder="Enter Your Message"></textarea>
            </div>
            <button className="bg-gradient-to-r from-[#69247C] to-[#e1649e] text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact