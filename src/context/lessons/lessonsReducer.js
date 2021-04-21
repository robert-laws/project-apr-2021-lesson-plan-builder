import {
  BUILD_LESSON,
  GET_LESSONS,
  GET_LESSON,
  SAVED_LESSON,
  LESSON_POST_ERROR,
} from '../types';

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
        savedLessonId: null,
        lessonPostError: null,
      };
    }

    case GET_LESSONS: {
      return {
        ...state,
        lessons: action.payload,
        newLesson: null,
        isLoadingLessons: false,
        savedLessonId: null,
        lessonPostError: null,
      };
    }

    case GET_LESSON: {
      return {
        ...state,
        lesson: state.lessons.find(
          (lesson) => lesson.id === parseInt(action.payload)
        ),
        newLesson: null,
        savedLessonId: null,
        lessonPostError: null,
      };
    }

    case SAVED_LESSON: {
      return {
        ...state,
        savedLessonId: action.payload,
        lessonPostError: null,
      };
    }

    case LESSON_POST_ERROR: {
      return {
        ...state,
        savedLessonId: null,
        lessonPostError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default lessonsReducer;
