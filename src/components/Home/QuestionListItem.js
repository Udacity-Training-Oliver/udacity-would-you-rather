import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function QuestionListItem(props) {
  const navigate = useNavigate();
  const { id, author, optionOne } = props;

  const user = useSelector((state) => state.users[author])

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/question/${id}`);
  };

  return (
    <Card className='m-3' style={{ width: '28rem' }}>
      <Card.Header as="h5">{`${user.name} asks:`}</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
            <Card.Img width={113} variant="Top" src={user.avatarURL} />
            </Col>
            <Col>
            <Card.Title>Would you rather</Card.Title>
            <Card.Text>
              ...{optionOne.text.substring(0, 15)}...
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>View Poll</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card >
  );
}

QuestionListItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  optionOne: PropTypes.object.isRequired,
}
