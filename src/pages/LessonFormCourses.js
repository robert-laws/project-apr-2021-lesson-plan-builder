import React, { useState, useCallback, useContext, useEffect } from 'react';
import Section from '../layout/Section';
import Spinner from '../components/ui/Spinner';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import StaticTextInput from '../components/ui/StaticTextInput';
import CoursesContext from '../context/courses/coursesContext';
import LessonsContext from '../context/lessons/lessonsContext';
import { isEmptyObject } from '../util/lessonFormUtil';

const LessonFormCourses = ({ handleAdvanceStep }) => {
  const coursesContext = useContext(CoursesContext);
  const {
    getCourses,
    getCourse,
    clearCourse,
    courses,
    course,
    isLoading,
  } = coursesContext;

  const lessonsContext = useContext(LessonsContext);
  const { buildLesson } = lessonsContext;

  const [courseSelect, setCourseSelect] = useState({
    name: '',
    id: '',
  });

  const [formInvalid, setFormInvalid] = useState(true);

  useEffect(() => {
    clearCourse();
  }, [clearCourse]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  useEffect(() => {
    setFormInvalid(isEmptyObject(course));
  }, [course]);

  useEffect(() => {
    if (courseSelect.id !== '') {
      getCourse(courseSelect.id);
    } else {
      clearCourse();
    }
  }, [getCourse, clearCourse, courseSelect]);

  const handleCourseSelect = useCallback(
    (name, id) => {
      setCourseSelect({ name, id });
    },
    [setCourseSelect]
  );

  const inputHandler = useCallback(
    (inputName, value) => {
      buildLesson(inputName, value);
    },
    [buildLesson]
  );

  return (
    <Section>
      <Section>
        <Heading size='h2'>Course Selection</Heading>
        {isLoading ? (
          <Spinner minHeight='18rem' />
        ) : (
          <div className='mt-8'>
            <Select
              optionList={courses}
              onSelect={handleCourseSelect}
              labelName='Courses'
              name='courses'
              initialText={'Select a course to load details'}
              complex={true}
            />
            <hr className='mt-8 mb-4' />
            <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
              <div className='grid grid-cols-1 gap-6'>
                <Heading size='h2'>Course Details</Heading>
              </div>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
              <div className='grid grid-cols-1 gap-6'>
                <StaticTextInput
                  inputName={'course_code'}
                  labelName='Course Code'
                  onInput={inputHandler}
                  initialValue={''}
                  updateValue={course.title?.rendered || ''}
                  visible={true}
                />
              </div>
              <div className='grid grid-cols-1 gap-6'>
                <StaticTextInput
                  inputName={'course_name'}
                  labelName='Course Name'
                  onInput={inputHandler}
                  initialValue={''}
                  updateValue={course.acf?.course_name || ''}
                  visible={true}
                />
              </div>
              <div className='grid grid-cols-1 gap-6'>
                <StaticTextInput
                  inputName={'semester'}
                  labelName='Semester'
                  onInput={inputHandler}
                  initialValue={''}
                  updateValue={course.acf?.semester || ''}
                  visible={true}
                />
              </div>
              <div className='grid grid-cols-1 gap-6'>
                <StaticTextInput
                  inputName={'faculty_first_name'}
                  labelName='Faculty First Name'
                  onInput={inputHandler}
                  initialValue={''}
                  updateValue={course.acf?.faculty_first_name || ''}
                  visible={true}
                />
              </div>

              <div className='grid grid-cols-1 gap-6'>
                <StaticTextInput
                  inputName={'faculty_last_name'}
                  labelName='Faculty Last Name'
                  onInput={inputHandler}
                  initialValue={''}
                  updateValue={course.acf?.faculty_last_name || ''}
                  visible={true}
                />
              </div>
              <div className='grid grid-cols-1 gap-6'>
                <StaticTextInput
                  inputName={'year'}
                  labelName='Year'
                  onInput={inputHandler}
                  initialValue={''}
                  updateValue={course.acf?.year || ''}
                  visible={true}
                />
              </div>
            </div>
          </div>
        )}
      </Section>
      <div className='flex justify-end mt-4'>
        <Button
          handleClick={handleAdvanceStep}
          buttonText='Next Step'
          invalidForm={formInvalid}
        />
      </div>
    </Section>
  );
};

export default LessonFormCourses;
