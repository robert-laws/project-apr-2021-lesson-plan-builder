import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/dateUtil';

const LessonCard = ({ lesson }) => {
  return (
    <div className='p-4 w-full'>
      <div className='h-full bg-gray-100 p-8 rounded'>
        <div className='flex justify-between border-b pb-2'>
          <div>
            <h2 class='text-gray-900 text-lg title-font font-medium mb-2'>
              {lesson.acf.course_code}: {lesson.acf.course_title}
            </h2>
            <h3 className='-mt-2'>
              {lesson.acf.faculty_first_name} {lesson.acf.faculty_last_name}
            </h3>
          </div>
          <p class='leading-relaxed text-base'>
            {lesson.acf.semester} {lesson.acf.year}
          </p>
        </div>
        <div className='flex justify-between'>
          <p className='pt-2'>
            Session Date: {formatDate(lesson.acf.session_date)}
          </p>
          <Link
            to={`/lists/${lesson.id}`}
            class='mt-3 text-indigo-500 inline-flex items-center cursor-pointer'
          >
            View Lesson Details
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
