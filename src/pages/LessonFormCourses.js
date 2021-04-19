import React from 'react';
import Button from '../components/ui/Button';

const LessonFormCourses = ({ handleAdvanceStep }) => {
  return (
    <div>
      Courses
      <div className='flex justify-end'>
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </div>
  );
};

export default LessonFormCourses;
