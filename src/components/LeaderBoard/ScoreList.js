import React from 'react';
import PropTypes from 'prop-types';
import ScoreListItem from './ScoreListItem';

const ScoreList = ({scores}) => {
  return (
    <div className="m-3">
      {scores.map((s) => (
        <div key={s.id}>
          <ScoreListItem
            id={s.id}
            user={s.user}
            answeredQuestions={s.answeredQuestions}
            createdQuestions={s.createdQuestions} />
        </div>
      ))}
    </div>
  );
};

ScoreList.propTypes = {
  scores: PropTypes.array.isRequired,
};

export default ScoreList;

