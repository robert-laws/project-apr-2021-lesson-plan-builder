import { BUILD_LESSON, GET_LESSONS, GET_LESSON } from '../types';

const lessonsReducer = (state, action) => {
  switch (action.type) {
    case BUILD_LESSON: {
      return {
        ...state,
        lesson: {
          ...state.lesson,
          [action.payload.inputName]: action.payload.value,
        },
        isLoadingLessons: false,
      };
    }

    case GET_LESSONS: {
      return {
        ...state,
        lessons: action.payload,
        isLoadingLessons: false,
      };
    }

    case GET_LESSON: {
      return {
        ...state,
        lesson: state.lessons.find(
          (lesson) => lesson.id === parseInt(action.payload)
        ),
      };
    }

    default:
      return state;
  }
};

export default lessonsReducer;
