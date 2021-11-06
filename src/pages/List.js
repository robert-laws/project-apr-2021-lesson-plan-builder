import React, { useContext, useState } from 'react';
import AuthenticationContext from '../context/authentication/authenticationContext';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import Spinner from '../components/ui/Spinner';
import LessonCard from '../components/ui/LessonCard';
import SvgLink from '../components/ui/SvgLink';
import DeleteButton from '../components/ui/DeleteButton';
import LessonsContext from '../context/lessons/lessonsContext';
import ButtonSpinner from '../components/ui/ButtonSpinner';

const List = ({ lessons, isLoadingLessons }) => {
  const authenticationContext = useContext(AuthenticationContext);
  const { cookie } = authenticationContext;

  const lessonsContext = useContext(LessonsContext);
  const { deleteLesson } = lessonsContext;

  const [deletingLesson, setDeletingLesson] = useState('');

  const handleDeleteClick = async (e) => {
    // console.log(`Click for Delete, lesson #${e.target.name}`);
    setDeletingLesson(e.target.name);
    await deleteLesson(e.target.name, cookie);
    setDeletingLesson('');
  };

  return (
    <Section>
      <Heading size='h1'>Lessons List</Heading>

      {isLoadingLessons ? (
        <Spinner minHeight='18rem' />
      ) : (
        <div className='container p-4 mx-auto'>
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
                  <DeleteButton handleClick={handleDeleteClick} id={lesson.id}>
                    {deletingLesson === lesson.id.toString() && (
                      <ButtonSpinner />
                    )}
                  </DeleteButton>
                </LessonCard>
              ))}
          </div>
        </div>
      )}
    </Section>
  );
};

export default List;
