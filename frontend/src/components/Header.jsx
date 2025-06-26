import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="w-full">

      {/* --------- Booking Banner --------- */}
      <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-b from-[#009493] to-[#1e293b] rounded-lg px-6 md:px-10 lg:px-20'>

        {/* Left Side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
          <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
            Book Appointment <br /> With Trusted Doctors
          </p>
          <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>
              Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
              schedule your appointment hassle-free.
            </p>
          </div>
          <a
            href='#doctors'
            className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
          >
            Book appointment
            <img className='w-3' src={assets.arrow_icon} alt="" />
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 relative'>
          <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
      </div>

      {/* --------- Services Section (Column-Wise) --------- */}
      <div className="w-full bg-gradient-to-b from-[#006594] to-[#1e293b] text-white px-6 md:px-20 py-16">
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">

          {/* Card 1: Find Nearby Hospital */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Find Nearby Hospital</h2>
            <p className="text-sm md:text-base text-gray-300">
              Easily locate trusted hospitals near your location and book an appointment without the hassle.
            </p>
            <a
              href="#find-hospital"
              className="inline-block mt-6 bg-white text-[#1f2937] font-medium px-6 py-3 rounded-full hover:scale-105 transition duration-300"
            >
              Search Hospitals
            </a>
          </div>

          {/* Card 2: Buy Medicines */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Buy Medicines</h2>
            <p className="text-sm md:text-base text-gray-300">
              Order prescribed medicines from certified pharmacies and get them delivered to your doorstep.
            </p>
            <a
              href="#buy-medicines"
              className="inline-block mt-6 bg-white text-[#1f2937] font-medium px-6 py-3 rounded-full hover:scale-105 transition duration-300"
            >
              Shop Medicines
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
