import React from 'react';
import PropTypes from 'prop-types';
import QuestionListItem from './QuestionListItem';

const QuestionList = (props) => {
  const {questions} = props;

  return (
    <div className="m-3">
      {questions.map((q) => (
        <div key={q.id}>
          <QuestionListItem
            id={q.id}
            author={q.author}
            optionOne={q.optionOne} />
        </div>
      ))}
    </div>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionList;
