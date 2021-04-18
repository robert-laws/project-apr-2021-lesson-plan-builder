import React from 'react';

const LessonDetail = ({
  numberOfLearners,
  lessonDuration,
  classAssignment,
}) => {
  return (
    <div className='mt-4'>
      <div className='w-full mb-10 md:mb-0 pb-2'>
        <h5 className='inline-block font-bold title-font mb-2 text-gray-900'>
          Number of Students
        </h5>
        <p className='inline-block leading-relaxed text-base ml-2'>
          {numberOfLearners}
        </p>
      </div>
      <div className='w-full mb-10 md:mb-0 pb-2'>
        <h5 className='inline-block font-bold title-font mb-2 text-gray-900'>
          Lesson Duration
        </h5>
        <p className='inline-block leading-relaxed text-base ml-2'>
          {lessonDuration}
        </p>
      </div>
      <div className='w-full mb-10 md:mb-0 pb-2'>
        <h5 className='inline-block font-bold title-font mb-2 text-gray-900'>
          Target Assignment
        </h5>
        <p className='inline-block leading-relaxed text-base ml-2'>
          {classAssignment}
        </p>
      </div>
    </div>
  );
};

export default LessonDetail;
