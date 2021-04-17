import React from 'react';

const LessonDetail = ({
  numberOfLearners,
  lessonDuration,
  classAssignment,
}) => {
  return (
    <div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <p>Number of Students</p>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{numberOfLearners}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <p>Lesson Duration</p>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lessonDuration}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <p>Target Assignment</p>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{classAssignment}</p>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
