import React, { useEffect, useContext } from 'react';
import Heading from '../components/ui/Heading';
import LessonCard from '../components/ui/LessonCard';
import LessonDetail from '../components/ui/LessonDetail';
import LessonsContext from '../context/lessons/lessonsContext';

const Detail = ({ lessonId }) => {
  const lessonsContext = useContext(LessonsContext);
  const { lesson, getLesson } = lessonsContext;

  useEffect(() => {
    getLesson(lessonId);
  }, [getLesson, lessonId]);

  return (
    <>
      <Heading>Lesson Detail</Heading>

      {!lesson ? (
        <div>loading...</div>
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
            numberOfLearners={lesson.acf.number_of_learners}
            lessonDuration={lesson.acf.duration_of_session}
            classAssignment={lesson.acf.class_assignment}
          />
        </LessonCard>
      )}
    </>
  );
};

export default Detail;
