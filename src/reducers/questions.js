import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        ...action.questions.questions,
      };
    case SAVE_QUESTION:
      let formattedQuestion = action.formattedQuestion.formattedQuestion;
      return {
        ...state,
        [formattedQuestion.id]: formattedQuestion,
      };
    default:
      return state;
  }
}
