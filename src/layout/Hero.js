import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='py-20 hero-section'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-2 text-white'>
          Build Customized Lesson Plans for Instruction
        </h2>
        <h3 className='text-2xl mb-8 text-gray-200'>
          Speed up the process with data automation
        </h3>

        <Link
          to='/about'
          className='bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider'
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
