import PropTypes from 'prop-types'
import QuestionListItem from './QuestionListItem';

export default function QuestionList(props) {
  const { questions } = props;

  return (
    <ol className="m-3">
      {questions.map((q) => (
        <li key={q.id}>
          <QuestionListItem
            id={q.id}
            author={q.author}
            optionOne={q.optionOne} />
        </li>
      ))}
    </ol>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
}
