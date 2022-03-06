import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const handleAddQuestion = (authedUser, optionOneText, optionTwoText) => (dispatch) => {
  dispatch(showLoading());
  return saveQuestion({
    author: authedUser,
    optionOneText,
    optionTwoText,
  })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()));
}
