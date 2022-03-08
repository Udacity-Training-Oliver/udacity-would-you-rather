import PropTypes from 'prop-types'
import ScoreListItem from './ScoreListItem';

export default function ScoreList({ scores }) {

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
}

ScoreList.propTypes = {
  scores: PropTypes.array.isRequired,
}
