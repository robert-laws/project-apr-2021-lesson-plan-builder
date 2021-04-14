import React from 'react';
import { useParams } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import New from './New';

const LessonContainer = ({ page }) => {
  let { lessonId } = useParams();

  return (
    <div>
      Lesson Container
      {page === 'lists' ? (
        lessonId ? (
          <Detail lessonId={lessonId} />
        ) : (
          <List />
        )
      ) : (
        <New />
      )}
    </div>
  );
};

export default LessonContainer;
