import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import AuthenticationContext from '../context/authentication/authenticationContext';
import OptionsContext from '../context/options/optionsContext';
import LessonsContext from '../context/lessons/lessonsContext';

const LessonFormReview = ({ handleReverseStep }) => {
  const authenticationContext = useContext(AuthenticationContext);
  const { cookie } = authenticationContext;

  const lessonsContext = useContext(LessonsContext);
  const { newLesson, postLesson, savedLessonId } = lessonsContext;

  const optionsContext = useContext(OptionsContext);
  const {
    informationLiteracyObjectives,
    thresholdConcepts,
    librarians,
  } = optionsContext;

  const [restLesson, setRestLesson] = useState(null);
  const [savingLesson, setSavingLesson] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const preparedLesson = {
      status: 'publish',
      information_literacy_objectives:
        newLesson.information_literacy_objectives,
      threshold_concepts: newLesson.threshold_concepts,
      librarians: newLesson.librarians,
      title: `${newLesson.course_code} - ${newLesson.course_name} - ${newLesson.semester} ${newLesson.year} - ${newLesson.faculty_last_name}`,
      fields: {
        course_code: newLesson.course_code,
        course_title: newLesson.course_name,
        faculty_first_name: newLesson.faculty_first_name,
        faculty_last_name: newLesson.faculty_last_name,
        year: newLesson.year,
        semester: newLesson.semester,
        co_instructor: newLesson.co_instructor,
        session_date: newLesson.session_date,
        duration_of_session: newLesson.duration,
        number_of_learners: newLesson.number_of_learners,
        class_assignment: newLesson.class_assignment,
        learning_outcomes: newLesson.learning_outcomes,
        modules_details: newLesson.modules_details,
        resources: newLesson.resources,
      },
    };

    setRestLesson(preparedLesson);
  }, [newLesson]);

  const getLibrarianName = (libStaff) => {
    let librarianName = librarians.find(
      (librarian) => librarian.id === libStaff[0]
    );
    return librarianName.name;
  };

  const getInfoLitObjectsNames = (infoLitObjectives) => {
    let values = infoLitObjectives.map((objective) => {
      let item = informationLiteracyObjectives.find(
        (item) => item.id === objective
      );
      return item.name;
    });
    return values;
  };

  const getThresholdConceptNames = (thresConcepts) => {
    let values = thresConcepts.map((concept) => {
      let item = thresholdConcepts.find((item) => item.id === concept);
      return item.name;
    });
    return values;
  };

  const handleSentToRestApi = async () => {
    setSavingLesson(true);
    await postLesson(restLesson, cookie);
  };

  useEffect(() => {
    if (savedLessonId) {
      history.push(`/lists/${savedLessonId}`);
    }
  }, [savedLessonId, history]);

  return (
    <div>
      <Heading size='h2'>Review Lesson Plan Details</Heading>
      {newLesson && (
        <div className='container mx-auto px-4'>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>Course Code</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{newLesson.course_code}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>Course Name</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{newLesson.course_name}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>Faculty</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>
                {newLesson.faculty_first_name} {newLesson.faculty_last_name}
              </p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Semester and Year
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>
                {newLesson.semester} {newLesson.year}
              </p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Number of Students
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{newLesson.number_of_learners}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Lesson Duration
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{newLesson.duration}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>Session Date</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{newLesson.session_date}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Target Assignment
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{newLesson.class_assignment}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>Librarian</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{getLibrarianName(newLesson.librarians)}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>Co-Instructor</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{newLesson.co_instructor}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Learning Outcomes
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <div
                dangerouslySetInnerHTML={{
                  __html: newLesson.learning_outcomes,
                }}
              />
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>Resources</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <div dangerouslySetInnerHTML={{ __html: newLesson.resources }} />
            </div>
          </div>

          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Information Literacy Objectives
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <ul>
                {newLesson.information_literacy_objectives &&
                  getInfoLitObjectsNames(
                    newLesson.information_literacy_objectives
                  ).map((objective) => <li key={objective}>{objective}</li>)}
              </ul>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Threshold Concepts
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <ul>
                {newLesson.threshold_concepts &&
                  getThresholdConceptNames(
                    newLesson.threshold_concepts
                  ).map((concept) => <li key={concept}>{concept}</li>)}
              </ul>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-base font-bold text-right'>
                Modules Details
              </h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <div
                dangerouslySetInnerHTML={{ __html: newLesson.modules_details }}
              />
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-between mt-4'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        {/* <Button handleClick={handleSentToRestApi} buttonText='Save Lesson' /> */}
        <button
          onClick={handleSentToRestApi}
          type='button'
          className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 cursor-pointer disabled:cursor-default disabled:bg-gray-400'
        >
          {savingLesson && (
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          )}
          Save Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonFormReview;
