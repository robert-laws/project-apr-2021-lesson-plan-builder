import React, { useEffect, useContext } from 'react';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import Spinner from '../components/ui/Spinner';
import LessonCard from '../components/ui/LessonCard';
import LessonDetail from '../components/ui/LessonDetail';
import LessonsContext from '../context/lessons/lessonsContext';

const Detail = ({
  lessonId,
  librarians,
  thresholdConcepts,
  informationLiteracyObjectives,
}) => {
  const lessonsContext = useContext(LessonsContext);
  const { lesson, getLesson } = lessonsContext;

  useEffect(() => {
    getLesson(lessonId);
  }, [getLesson, lessonId]);

  return (
    <Section>
      <Heading size='h1'>Lesson Detail</Heading>
      {!lesson ? (
        <Spinner minHeight='18rem' />
      ) : (
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
          <LessonDetail
            librarians={librarians}
            thresholdConcepts={thresholdConcepts}
            informationLiteracyObjectives={informationLiteracyObjectives}
            numberOfLearners={lesson.acf.number_of_learners}
            lessonDuration={lesson.acf.duration_of_session}
            classAssignment={lesson.acf.class_assignment}
            lessonLibrarian={lesson.librarians}
            coInstructor={lesson.acf.co_instructor}
            resources={lesson.acf.resources}
            learningOutcomes={lesson.acf.learning_outcomes}
            lessonThresholdConcepts={lesson.threshold_concepts}
            lessonInformationLiteracyObjectives={
              lesson.information_literacy_objectives
            }
            modulesDetails={lesson.acf.modules_details}
          />
        </LessonCard>
      )}
    </Section>
  );
};

export default Detail;
