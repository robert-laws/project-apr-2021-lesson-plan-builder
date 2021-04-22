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
            <Heading size='h3'>Logging into the Website</Heading>
            <p className='text-gray-600 mb-8 mt-2'>
              The lesson building and list components of the website are
              accessible only to logged in users of the site. Users who are
              logged in are authorized to view and create new lessons.
            </p>
            <Heading size='h3'>Creating Lessons</Heading>
            <p className='text-gray-600 mb-8 mt-2'>
              The LessonBuilder website is designed to help library and
              information literacy instructors create lesson plans quickly. The
              Lesson building process includes four steps. Each lesson is tied
              to a course in the University curriculum. Step one allows the user
              to select a course from the curriculum and auto-populates the form
              fields with data. The next step is add session details. This step
              captures information like the session date, number of learners,
              information literacy objectives, threshold concepts, resources
              used, and more. The third step is add individual instructional
              modules with detailed information about the order for each module,
              specific steps for each module, and the time for each module. The
              last step is to review the lesson and save it to the database.
            </p>
            <Heading size='h3'>Lesson List and Details</Heading>
            <p className='text-gray-600 mb-8 mt-2'>
              Once a new lesson has been saved it can be viewed within the list
              of all lessons. The list provides a condensed view of the lesson
              details. Each lesson can be viewed in greater detail. Lessons can
              be retrieved for reference later when a class instruction is being
              delivered.
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
