import { GET_COURSE, GET_COURSES, CLEAR_COURSE } from '../types';

const coursesReducer = (state, action) => {
  switch (action.type) {
    case GET_COURSES: {
      return {
        ...state,
        courses: action.payload,
        isLoading: false,
      };
    }

    case GET_COURSE: {
      return {
        ...state,
        course: state.courses.find(
          (course) => course.id === parseInt(action.payload)
        ),
      };
    }

    case CLEAR_COURSE: {
      return {
        ...state,
        course: {},
      };
    }

    default:
      return state;
  }
};

export default coursesReducer;
