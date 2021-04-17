import React from 'react';
import Heading from '../components/ui/Heading';
import LessonCard from '../components/ui/LessonCard';

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
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default List;
