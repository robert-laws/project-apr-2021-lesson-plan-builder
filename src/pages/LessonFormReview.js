import React from 'react';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const LessonFormReview = ({ handleReverseStep }) => {
  return (
    <div>
      <Heading size='h2'>Review Lesson Plan Details</Heading>
      <div className='flex justify-start mt-4'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
      </div>
    </div>
  );
};

export default LessonFormReview;
