import { GET_COURSE, GET_COURSES } from '../types';

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

    default:
      return state;
  }
};

export default coursesReducer;
