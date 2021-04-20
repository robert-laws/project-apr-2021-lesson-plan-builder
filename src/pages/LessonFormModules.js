import React from 'react';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const LessonFormModules = ({ handleAdvanceStep, handleReverseStep }) => {
  return (
    <Section>
      <Section>
        <Heading size='h2'>Modules Details</Heading>
      </Section>
      <div className='flex justify-between mt-4'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </Section>
  );
};

export default LessonFormModules;
