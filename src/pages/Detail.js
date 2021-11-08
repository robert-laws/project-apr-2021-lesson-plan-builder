import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Section from '../layout/Section';
import DeleteButton from '../components/ui/DeleteButton';
import ButtonSpinner from '../components/ui/ButtonSpinner';
import Heading from '../components/ui/Heading';
import Spinner from '../components/ui/Spinner';
import LessonCard from '../components/ui/LessonCard';
import LessonDetail from '../components/ui/LessonDetail';
import AuthenticationContext from '../context/authentication/authenticationContext';
import LessonsContext from '../context/lessons/lessonsContext';

const Detail = ({
  lessonId,
  librarians,
  thresholdConcepts,
  informationLiteracyObjectives,
}) => {
  const authenticationContext = useContext(AuthenticationContext);
  const { cookie } = authenticationContext;

  const lessonsContext = useContext(LessonsContext);
  const { lesson, getLesson, deleteLesson } = lessonsContext;

  const history = useHistory();

  useEffect(() => {
    getLesson(lessonId);
  }, [getLesson, lessonId]);

  const [deletingLesson, setDeletingLesson] = useState('');

  const handleDeleteClick = async (e) => {
    setDeletingLesson(e.target.name);
    await deleteLesson(e.target.name, cookie);
    setDeletingLesson('');
    history.push(`/lists`);
  };

  return (
    <Section>
      <Heading size='h1'>Lesson Detail</Heading>
      {!lesson ? (
        <Spinner minHeight='18rem' />
      ) : (
        <>
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
          <div className='flex justify-between align-bottom m-4'>
            <Link
              to='/lists'
              className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 cursor-pointer disabled:cursor-default disabled:bg-gray-400'
            >
              Return to All Lessons
            </Link>
            <DeleteButton
              handleClick={handleDeleteClick}
              id={lesson.id}
              buttonText='Delete this Lesson'
            >
              {deletingLesson === lesson.id.toString() && <ButtonSpinner />}
            </DeleteButton>
          </div>
        </>
      )}
    </Section>
  );
};

export default Detail;
