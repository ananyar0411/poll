import { showLoading } from "react-redux-loading-bar";
import { _saveQuestion } from "../utils/api.js";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionAnswer(questions) {
  return {
    type: SAVE_QUESTION_ANSWER,
    questions: questions,
  };
}

export function saveQuestion(formattedQuestion) {
  return {
    type: SAVE_QUESTION,
    formattedQuestion,
  };
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion(question).then(( formattedQuestion ) => {
      console.log("formattedQuestion: ", formattedQuestion);

      dispatch(saveQuestion({ formattedQuestion }));
    });
  };
}
