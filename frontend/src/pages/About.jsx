import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>

      {/* Header */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="about" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to <strong>Med-E-Health</strong>, your trusted digital healthcare companion dedicated to making medical care more accessible, efficient, and patient-centered. 
            We understand how challenging it can be to schedule doctor appointments, keep track of health records, and maintain a consistent care plan. 
            That’s why we’ve built a platform focused on transforming how you manage your healthcare.
          </p>
          <p>
            At Med-E-Health, we are committed to leveraging the power of technology to enhance your healthcare journey. 
            Whether you're booking your first appointment, managing prescriptions, or coordinating follow-up care, 
            Med-E-Health is designed to support you—every step of the way.
          </p>
          <b className='text-gray-800 text-base'>Our Vision</b>
          <p>
            Our vision is to build a <strong>seamless, connected healthcare experience</strong> that bridges the gap between patients and providers. 
            We aim to empower individuals to take control of their health—conveniently, safely, and with confidence.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl my-4 text-center text-gray-700'>
        <p>WHY <span className='font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0 mb-20'>
        <div className='border px-10 md:px-8 py-8 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY</b>
          <p>Streamlined appointment scheduling tailored to your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-8 py-8 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Access a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-8 py-8 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Smart recommendations and timely reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
