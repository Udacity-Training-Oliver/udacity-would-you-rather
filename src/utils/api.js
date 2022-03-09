import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js';

/**
 * Get Initial Data (Users and Questions)
 * @return {Promise} Promise with initially loaded data
 */
export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

/**
 * Save Question
 * @param {*} info question details to process
 * @return {Promise} Result
 */
export function saveQuestion(info) {
  return _saveQuestion(info);
}

/**
 * Save Question Answer
 * @param {*} info question details to process
 * @return {Promise} Result
 */
export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
