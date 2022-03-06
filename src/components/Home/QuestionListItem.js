import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { Button, Card } from "react-bootstrap";

export default function QuestionListItem(props) {
  const navigate = useNavigate();
  const { id, author, optionOne } = props;

  const userName = useSelector((state) => state.users[author]?.name)

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/question/${id}`);
  };

  return (
    <Card style={{ width: '24rem' }}>
      <Card.Header as="h5">{`${userName} asks:`}</Card.Header>
      <Card.Body>
        <Card.Title>Would you rather</Card.Title>
        <Card.Text>
          ...{optionOne.text.substring(0, 15)}...
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>View Poll</Button>
      </Card.Body>
    </Card>
  );
}

QuestionListItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  optionOne: PropTypes.object.isRequired,
}
