import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import HorizontalSteps from '../layout/HorizontalSteps';
import LessonFormCourses from './LessonFormCourses';
import LessonFormSession from './LessonFormSession';
import LessonFormModules from './LessonFormModules';
import LessonFormReview from './LessonFormReview';

const NewLesson = () => {
  const [formProgress, setFormProgress] = useState(1);

  const advanceStep = () => {
    setFormProgress((prevState) => prevState + 1);
  };

  const reverseStep = () => {
    setFormProgress((prevState) => prevState - 1);
  };

  return (
    <Section>
      <Heading size='h1'>New Lesson</Heading>
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
        <DndProvider backend={HTML5Backend}>
          <LessonFormModules
            handleAdvanceStep={advanceStep}
            handleReverseStep={reverseStep}
          />
        </DndProvider>
      )}
      {formProgress === 4 && (
        <LessonFormReview handleReverseStep={reverseStep} />
      )}
    </Section>
  );
};

export default NewLesson;
