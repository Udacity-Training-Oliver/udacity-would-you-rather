import PropTypes from 'prop-types'
import { Button, Card } from "react-bootstrap";

export default function QuestionListItem(props) {
  // TODO const {id, author, optionOne, optionTwo} = props;
  const {author, optionOne} = props;

  return (
    <Card style={{ width: '24rem' }}>
      <Card.Header as="h5">{`${author} asks:`}</Card.Header>
      <Card.Body>
        <Card.Title>Would you rather</Card.Title>
        <Card.Text>
          ...{optionOne.text.substring(0, 15)}...
        </Card.Text>
        <Button variant="primary">View Poll</Button>
      </Card.Body>
    </Card>
  );
}

QuestionListItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  optionOne: PropTypes.object.isRequired,
  optionTwo: PropTypes.object.isRequired,
}
