import React, { useState } from 'react';
import Heading from '../components/ui/Heading';
import HorizontalSteps from '../layout/HorizontalSteps';
import LessonFormCourses from './LessonFormCourses';
import LessonFormSession from './LessonFormSession';
import LessonFormModules from './LessonFormModules';
import LessonFormReview from './LessonFormReview';

const New = () => {
  const [formProgress, setFormProgress] = useState(1);

  const updateStep = (stepValue) => {
    setFormProgress(stepValue);
  };

  return (
    <div className='container p-4 mx-auto'>
      <Heading>New Lesson</Heading>
      {formProgress && <HorizontalSteps step={formProgress} />}
      <hr className='mt-16 mb-4' />
      {formProgress === 1 && (
        <LessonFormCourses handleUpdateStep={updateStep} />
      )}
      {formProgress === 2 && (
        <LessonFormSession handleUpdateStep={updateStep} />
      )}
      {formProgress === 3 && (
        <LessonFormModules handleUpdateStep={updateStep} />
      )}
      {formProgress === 4 && <LessonFormReview handleUpdateStep={updateStep} />}
    </div>
  );
};

export default New;
