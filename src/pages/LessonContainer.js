import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import New from './New';
import LessonsContext from '../context/lessons/lessonsContext';

const LessonContainer = ({ page }) => {
  const lessonsContext = useContext(LessonsContext);
  const { lessons, getLessons, isLoadingLessons } = lessonsContext;

  let { lessonId } = useParams();

  useEffect(() => {
    getLessons();
  }, [getLessons]);

  return (
    <div>
      {page === 'lists' ? (
        lessonId ? (
          <Detail lessonId={lessonId} />
        ) : (
          <List lessons={lessons} isLoadingLessons={isLoadingLessons} />
        )
      ) : (
        <New />
      )}
    </div>
  );
};

export default LessonContainer;
