import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import New from './New';
import LessonsContext from '../context/lessons/lessonsContext';
import OptionsContext from '../context/options/optionsContext';

const LessonContainer = ({ page }) => {
  const lessonsContext = useContext(LessonsContext);
  const { lessons, getLessons, isLoadingLessons } = lessonsContext;

  const optionsContext = useContext(OptionsContext);
  const {
    informationLiteracyObjectives,
    thresholdConcepts,
    librarians,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getLibrarians,
  } = optionsContext;

  let { lessonId } = useParams();

  useEffect(() => {
    getLessons();
    getInformationLiteracyObjectives();
    getThresholdConcepts();
    getLibrarians();
  }, [
    getLessons,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getLibrarians,
  ]);

  return (
    <div>
      {page === 'lists' ? (
        lessonId ? (
          lessons &&
          librarians &&
          thresholdConcepts &&
          informationLiteracyObjectives ? (
            <Detail
              lessonId={lessonId}
              librarians={librarians}
              thresholdConcepts={thresholdConcepts}
              informationLiteracyObjectives={informationLiteracyObjectives}
            />
          ) : (
            <div>loading...</div>
          )
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
