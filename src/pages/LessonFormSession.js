import React from 'react';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const LessonFormSession = ({ handleAdvanceStep, handleReverseStep }) => {
  return (
    <div>
      <Heading size='h2'>Session Details</Heading>
      <div className='flex justify-between'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </div>
  );
};

export default LessonFormSession;
