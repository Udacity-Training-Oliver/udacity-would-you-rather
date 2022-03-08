import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

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

export const answerQuestion = (question) => {
  return {
    type: ANSWER_QUESTION,
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
    .then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question.id, authedUser));
    })
    .then(() => dispatch(hideLoading()));
}

export const handleAnswerQuestion = (authedUser, questionId, answer) => (dispatch) => {
  dispatch(showLoading());
  return saveQuestionAnswer({
    authedUser,
    questionId,
    answer,
  })
    .then(() => {
      //TODO Replace DBG with actions
      console.log('dispatch update question', questionId, answer);
      console.log('dispatch update user', authedUser);
    })
    .then(() => dispatch(hideLoading()));
}
