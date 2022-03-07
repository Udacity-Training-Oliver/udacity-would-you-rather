import {RECEIVE_USERS, ADD_QUESTION_TO_USER } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          questions: state[action.userId].questions.concat([action.questionId])
        }
      };
    default:
      return state;
  }
}

export default users;
