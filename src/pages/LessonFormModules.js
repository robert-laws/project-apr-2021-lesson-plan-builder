import React from 'react';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const LessonFormModules = ({ handleAdvanceStep, handleReverseStep }) => {
  return (
    <div>
      <Heading size='h2'>Modules Details</Heading>
      <div className='flex justify-between mt-4'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </div>
  );
};

export default LessonFormModules;
