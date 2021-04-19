import React from 'react';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const LessonFormCourses = ({ handleAdvanceStep }) => {
  return (
    <Section>
      <Heading size='h2'>Course Details</Heading>
      <Section></Section>
      <div className='flex justify-end mt-4'>
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </Section>
  );
};

export default LessonFormCourses;
