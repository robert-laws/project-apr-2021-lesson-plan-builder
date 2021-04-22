import React from 'react';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import placeholderImage from '../assets/images/placeholder-image.png';

const About = () => {
  return (
    <Section>
      <Heading size='h1'>About</Heading>
      <section className='container mx-auto px-6 p-10'>
        <div className='flex flex-wrap mb-20 items-start'>
          <div className='w-full md:w-3/4 md:pr-10'>
            <p className='text-gray-600 mb-8'>
              The LessonBuilder website is designed to help instructors create
              lesson plans quickly.
            </p>
          </div>
          <div className='w-full md:w-1/4'>
            <img src={placeholderImage} alt='Monitoring' />
          </div>
        </div>
      </section>
    </Section>
  );
};

export default About;
