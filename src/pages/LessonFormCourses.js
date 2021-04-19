import React from 'react';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const LessonFormCourses = ({ handleAdvanceStep }) => {
  return (
    <div>
      <Heading size='h2'>Course Details</Heading>
      <div className='flex justify-end'>
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </div>
  );
};

export default LessonFormCourses;
