import PropTypes from 'prop-types'
import ScoreListItem from './ScoreListItem';

export default function ScoreList({ scores }) {

  return (
    <ol className="m-3">
      {scores.map((s) => (
        <li key={s.id}>
          <ScoreListItem
            id={s.id}
            user={s.user}
            answeredQuestions={s.answeredQuestions}
            createdQuestions={s.createdQuestions} />
        </li>
      ))}
    </ol>
  );
}

ScoreList.propTypes = {
  scores: PropTypes.array.isRequired,
}
