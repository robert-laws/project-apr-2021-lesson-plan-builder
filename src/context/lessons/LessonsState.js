import React, { useReducer, useCallback } from 'react';
import {
  BUILD_LESSON,
  GET_LESSONS,
  GET_LESSON,
  DELETE_LESSON,
  SAVED_LESSON,
  LESSON_POST_ERROR,
} from '../types';
import LessonsContext from './lessonsContext';
import lessonsReducer from './lessonsReducer';

const LessonsState = ({ children }) => {
  const initialState = {
    newLesson: null,
    lesson: null,
    lessons: null,
    isLoadingLessons: true,
    savedLessonId: null,
    lessonPostError: null,
  };

  const [state, dispatch] = useReducer(lessonsReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getLessons = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/lessons?_fields=id,title,acf,information_literacy_objectives,threshold_concepts,librarians&order=desc`;

    try {
      const response = await fetch(restURL);
      const allLessons = await response.json();

      if (allLessons) {
        dispatch({ type: GET_LESSONS, payload: allLessons });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getLesson = useCallback(
    (id) => {
      dispatch({ type: GET_LESSON, payload: id });
    },
    [dispatch]
  );

  const buildLesson = useCallback(
    (inputName, value) => {
      dispatch({ type: BUILD_LESSON, payload: { inputName, value } });
    },
    [dispatch]
  );

  const postLesson = useCallback(
    async (lessonData, token) => {
      let postLessonUrl = `${restRoot}/wp/v2/lessons`;

      try {
        const response = await fetch(postLessonUrl, {
          method: 'POST',
          body: JSON.stringify(lessonData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });

        if (!response.ok) {
          // error saving lesson
          const error = await response.json();
          dispatch({ type: LESSON_POST_ERROR, payload: error.message });
        } else {
          // lesson saved successfully
          const result = await response.json();
          dispatch({ type: SAVED_LESSON, payload: result.id });
        }
      } catch (error) {
        dispatch({ type: LESSON_POST_ERROR, payload: error.message });
      }
    },
    [dispatch]
  );

  const deleteLesson = useCallback(
    async (lessonId, token) => {
      let deleteLessonUrl = `${restRoot}/wp/v2/lessons/${lessonId}`;

      try {
        const response = await fetch(deleteLessonUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });

        if (!response.ok) {
          const error = await response.json();
          console.log(error);
        } else {
          const result = await response.json();
          console.log(result);
          dispatch({ type: DELETE_LESSON, payload: lessonId });
        }
      } catch (error) {
        // dispatch({ type: LESSON_POST_ERROR, payload: error.message });
      }
    },
    [dispatch]
  );

  return (
    <LessonsContext.Provider
      value={{
        newLesson: state.newLesson,
        lesson: state.lesson,
        lessons: state.lessons,
        isLoadingLessons: state.isLoadingLessons,
        savedLessonId: state.savedLessonId,
        lessonPostError: state.lessonPostError,
        getLessons,
        getLesson,
        buildLesson,
        postLesson,
        deleteLesson,
      }}
    >
      {children}
    </LessonsContext.Provider>
  );
};

export default LessonsState;
