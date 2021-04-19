import React, { useState } from 'react';
import Heading from '../components/ui/Heading';
import HorizontalSteps from '../layout/HorizontalSteps';
import LessonFormCourses from './LessonFormCourses';
import LessonFormSession from './LessonFormSession';
import LessonFormModules from './LessonFormModules';
import LessonFormReview from './LessonFormReview';

const New = () => {
  const [formProgress, setFormProgress] = useState(1);

  const advanceStep = () => {
    setFormProgress((prevState) => prevState + 1);
  };

  const reverseStep = () => {
    setFormProgress((prevState) => prevState - 1);
  };

  return (
    <div className='container p-4 mx-auto'>
      <Heading>New Lesson</Heading>
      {formProgress && <HorizontalSteps step={formProgress} />}
      <hr className='mt-20 mb-4' />
      {formProgress === 1 && (
        <LessonFormCourses handleAdvanceStep={advanceStep} />
      )}
      {formProgress === 2 && (
        <LessonFormSession
          handleAdvanceStep={advanceStep}
          handleReverseStep={reverseStep}
        />
      )}
      {formProgress === 3 && (
        <LessonFormModules
          handleAdvanceStep={advanceStep}
          handleReverseStep={reverseStep}
        />
      )}
      {formProgress === 4 && (
        <LessonFormReview handleReverseStep={reverseStep} />
      )}
    </div>
  );
};

export default New;
