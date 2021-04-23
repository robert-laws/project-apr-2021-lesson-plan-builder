import React from 'react';
import featureOne from '../assets/images/lesson_builder_feature-1.png';
import featureTwo from '../assets/images/lesson_builder_feature-2.png';
import featureThree from '../assets/images/lesson_builder_feature-3.png';

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
          <p className='text-gray-600 mb-8'>
            Quickly build new lessons by using the database-driven form that
            steps through the lesson creation process. Learning modules can be
            created and organized by using a drag-and-drop feature to move them
            into different sequence of order.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={featureOne} alt='Monitoring' />
        </div>
      </div>

      <div className='flex items-center flex-col-reverse md:flex-row mb-20'>
        <div className='w-full md:w-1/2'>
          <img src={featureThree} alt='Reporting' />
        </div>
        <div className='w-full md:w-1/2 md:pl-10'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Lessons List
          </h4>
          <p className='text-gray-600 mb-8'>
            View a list of all lessons that have been built and saved to the
            database. The list of lessons includes brief detailed about each
            lesson and a link to view more lesson details.
          </p>
        </div>
      </div>

      <div className='flex items-center flex-wrap mb-20'>
        <div className='w-full md:w-1/2 md:pr-10'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Lesson Detail
          </h4>
          <p className='text-gray-600 mb-8'>
            View details of an individual lesson. Each lesson includes extensive
            details about the lesson. Everything is pulled from the databases on
            demand. The lesson details are formatted for improved readability.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={featureTwo} alt='Syncing' />
        </div>
      </div>
    </section>
  );
};

export default Features;
