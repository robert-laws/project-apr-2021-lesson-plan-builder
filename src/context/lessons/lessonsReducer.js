import { BUILD_LESSON, GET_LESSONS, GET_LESSON } from '../types';

const lessonsReducer = (state, action) => {
  switch (action.type) {
    case BUILD_LESSON: {
      return {
        ...state,
        newLesson: {
          ...state.newLesson,
          [action.payload.inputName]: action.payload.value,
        },
        lesson: null,
        lessons: null,
        isLoadingLessons: false,
      };
    }

    case GET_LESSONS: {
      return {
        ...state,
        lessons: action.payload,
        newLesson: null,
        isLoadingLessons: false,
      };
    }

    case GET_LESSON: {
      return {
        ...state,
        lesson: state.lessons.find(
          (lesson) => lesson.id === parseInt(action.payload)
        ),
        newLesson: null,
      };
    }

    default:
      return state;
  }
};

export default lessonsReducer;
