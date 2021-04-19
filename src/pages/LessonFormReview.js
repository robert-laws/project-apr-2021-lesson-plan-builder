import React from 'react';
import Button from '../components/ui/Button';

const LessonFormReview = ({ handleReverseStep }) => {
  return (
    <div>
      Review
      <div className='flex justify-start'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
      </div>
    </div>
  );
};

export default LessonFormReview;
