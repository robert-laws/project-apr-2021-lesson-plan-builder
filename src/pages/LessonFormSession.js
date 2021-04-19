import React from 'react';
import Button from '../components/ui/Button';

const LessonFormSession = ({ handleAdvanceStep, handleReverseStep }) => {
  return (
    <div>
      Session
      <div className='flex justify-between'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </div>
  );
};

export default LessonFormSession;
