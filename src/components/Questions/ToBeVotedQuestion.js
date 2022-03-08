//TODO import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function ToBeVotedQuestion(props) {
  //TODO const navigate = useNavigate();
  
  const { author, questionId, optionOne, optionTwo } = props;

  const authedUser = useSelector((state) => state.authedUser)

  //TODO Remove DBG
  console.log('Question', questionId);
  console.log('AuthedUser', authedUser);

  const [answer, setAnswer] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    //TODO navigate(`/question/${id}`);
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <Card className='m-3' style={{ width: '32rem' }}>
      <Card.Header as="h5">{`${author.name} asks:`}</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col lg={4}>
              <Card.Img width={113} variant="Top" src={`${process.env.PUBLIC_URL}/${author.avatarURL}`} />
            </Col>
            <Col lg={8}>
              <Card.Title>Would you rather...</Card.Title>

              <div onChange={handleChange}>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="radioOptionOne" name="optradio" value="optionOne" />
                  <label className="form-check-label" for="radioOptionOne">{optionOne}</label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="radioOptionTwo" name="optradio" value="optionTwo" />
                  <label className="form-check-label" for="radioOptionTwo">{optionTwo}</label>
                </div>
              </div>

              <Button className="mt-2" variant="primary" onClick={handleClick} disabled={answer === ''}>Submit</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card >
  );
}

ToBeVotedQuestion.propTypes = {
  author: PropTypes.object.isRequired,
  questionId: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
}
