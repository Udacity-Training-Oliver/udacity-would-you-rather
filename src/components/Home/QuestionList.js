import PropTypes from 'prop-types'
import QuestionListItem from './QuestionListItem';

export default function QuestionList(props) {
  const { questions } = props;

  return (
    <ol>
      {questions.map((q) => (
        <li key={q.id}>
          <QuestionListItem
            id={q.id}
            author={q.author}
            optionOne={q.optionOne}
            optionTwo={q.optionTwo} />
        </li>
      ))}
    </ol>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
}
