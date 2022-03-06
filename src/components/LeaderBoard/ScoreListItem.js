import PropTypes from 'prop-types'
import { Card } from "react-bootstrap";

export default function ScoreListItem(props) {
  const { user, answeredQuestions, createdQuestions } = props;

  return (
    <Card style={{ width: '24rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          Answered questions: {answeredQuestions}
        </Card.Text>
        <Card.Text>
          Created questions: {createdQuestions}
        </Card.Text>
        <Card>
          <Card.Header as="h5">Score</Card.Header>
          <Card.Text>
            Total Score: {answeredQuestions + createdQuestions}
          </Card.Text>
        </Card>
      </Card.Body>
    </Card>
  );
}

ScoreListItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  createdQuestions: PropTypes.number.isRequired,
}
