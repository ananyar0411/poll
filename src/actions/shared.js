import { getInitialData, _saveQuestionAnswer } from "../utils/api.js";
import { receiveUsers, saveUserAnswer } from "./users.js";
import { receiveQuestions, saveQuestionAnswer } from "./questions.js";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveQuestionAnswer(question) {
  return (dispatch) => {

    dispatch(showLoading());
    return _saveQuestionAnswer(question)
      .then((question) => {
          dispatch(saveQuestionAnswer(question));
          dispatch(saveUserAnswer({
              qid: question.id,
              author: question.author,
          }));
      })
      .then(() => dispatch(hideLoading()));;
  };
}
