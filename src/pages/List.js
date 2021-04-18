import React from 'react';
import Heading from '../components/ui/Heading';
import LessonCard from '../components/ui/LessonCard';
import SvgLink from '../components/ui/SvgLink';

const List = ({ lessons, isLoadingLessons }) => {
  return (
    <>
      <Heading>Lessons List</Heading>

      {isLoadingLessons ? (
        <div>loading...</div>
      ) : (
        <div className='container px-5 py-10 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {lessons &&
              lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  course_code={lesson.acf.course_code}
                  course_title={lesson.acf.course_title}
                  faculty_first_name={lesson.acf.faculty_first_name}
                  faculty_last_name={lesson.acf.faculty_last_name}
                  semester={lesson.acf.semester}
                  year={lesson.acf.year}
                  session_date={lesson.acf.session_date}
                >
                  <SvgLink
                    id={lesson.id}
                    location='lists'
                    linkText='View Lesson Details'
                  />
                </LessonCard>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default List;
