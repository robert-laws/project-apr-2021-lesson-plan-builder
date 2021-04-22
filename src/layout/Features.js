import React from 'react';
import placeholderImage from '../assets/images/placeholder-image.png';

const Features = () => {
  return (
    <section className='container mx-auto px-6 p-10'>
      <h2 className='text-4xl font-bold text-center text-gray-800 mb-8'>
        Features
      </h2>
      <div className='flex items-center flex-wrap mb-20'>
        <div className='w-full md:w-1/2 md:pr-10'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Lesson Builder
          </h4>
          <p className='text-gray-600 mb-8'>Build a lesson.</p>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={placeholderImage} alt='Monitoring' />
        </div>
      </div>

      <div className='flex items-center flex-col-reverse md:flex-row mb-20'>
        <div className='w-full md:w-1/2'>
          <img src={placeholderImage} alt='Reporting' />
        </div>
        <div className='w-full md:w-1/2 md:pl-10'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Lessons List
          </h4>
          <p className='text-gray-600 mb-8'>View a list of all lessons.</p>
        </div>
      </div>

      <div className='flex items-center flex-wrap mb-20'>
        <div className='w-full md:w-1/2 md:pr-10'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Lesson Detail
          </h4>
          <p className='text-gray-600 mb-8'>
            View details of an individual lesson.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={placeholderImage} alt='Syncing' />
        </div>
      </div>
    </section>
  );
};

export default Features;
