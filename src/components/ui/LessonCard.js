import React from 'react';
import { formatDate } from '../../util/dateUtil';

const LessonCard = ({ lesson, children }) => {
  return (
    <div className='p-4 w-full'>
      <div className='h-full bg-gray-100 p-8 rounded'>
        <div className='flex justify-between border-b pb-2'>
          <div>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
              {lesson.acf.course_code}: {lesson.acf.course_title}
            </h2>
            <h3 className='-mt-2'>
              {lesson.acf.faculty_first_name} {lesson.acf.faculty_last_name}
            </h3>
          </div>
          <p className='leading-relaxed text-base'>
            {lesson.acf.semester} {lesson.acf.year}
          </p>
        </div>
        <div className='flex justify-between'>
          <p className='pt-2'>
            Session Date: {formatDate(lesson.acf.session_date)}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LessonCard;
