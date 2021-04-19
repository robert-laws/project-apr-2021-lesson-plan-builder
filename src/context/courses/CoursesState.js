import React, { useReducer, useCallback } from 'react';
import { GET_COURSES, GET_COURSE, CLEAR_COURSE } from '../types';
import CoursesContext from './coursesContext';
import coursesReducer from './coursesReducer';

const CoursesState = ({ children }) => {
  const initialState = {
    course: {},
    courses: [],
    isLoading: true,
  };

  const [state, dispatch] = useReducer(coursesReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getCourses = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/courses?per_page=100&_fields=id,title,acf&orderby=title&order=asc`;

    try {
      const response = await fetch(restURL);
      const allCourses = await response.json();

      if (allCourses) {
        dispatch({ type: GET_COURSES, payload: allCourses });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getCourse = useCallback(
    (id) => {
      dispatch({ type: GET_COURSE, payload: id });
    },
    [dispatch]
  );

  const clearCourse = useCallback(() => {
    dispatch({ type: CLEAR_COURSE });
  }, [dispatch]);

  return (
    <CoursesContext.Provider
      value={{
        course: state.course,
        courses: state.courses,
        isLoading: state.isLoading,
        getCourses,
        getCourse,
        clearCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesState;
