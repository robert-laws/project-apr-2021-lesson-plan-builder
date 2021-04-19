import React, { useState } from 'react';
import Heading from '../components/ui/Heading';
import HorizontalSteps from '../layout/HorizontalSteps';

const New = () => {
  const [formProgress, setFormProgress] = useState(1);

  return (
    <div className='container p-4 mx-auto'>
      <Heading>New Lesson</Heading>
      {formProgress && <HorizontalSteps step={formProgress} />}
      <hr className='mt-16 mb-4' />
    </div>
  );
};

export default New;
