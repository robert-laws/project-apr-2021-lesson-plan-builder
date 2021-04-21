import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import Spinner from '../components/ui/Spinner';
import LessonsContext from '../context/lessons/lessonsContext';
import OptionsContext from '../context/options/optionsContext';

const LessonContainer = () => {
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
    <>
      {lessonId ? (
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
          <Spinner minHeight='18rem' />
        )
      ) : (
        <List lessons={lessons} isLoadingLessons={isLoadingLessons} />
      )}
    </>
  );
};

export default LessonContainer;
