import React from 'react';
import PropTypes from 'prop-types';
import {Container, Col, Row, Card} from 'react-bootstrap';

const ScoreListItem = (props) => {
  const {user, answeredQuestions, createdQuestions} = props;

  return (
    <Card className='m-3' style={{width: '34rem'}}>
      <Card.Body>
        <Container>
          <Row>
            <Col lg="2">
              <Card.Img width={85} variant="Top" alt="Avatar"
                src={`${process.env.PUBLIC_URL}/${user.avatarURL}`} />
            </Col>
            <Col lg="6">
              <Container>
                <Row>
                  <Card.Title>{user.name}</Card.Title>
                </Row>
                <Row className="mt-1">
                  <Card.Text>
                    Answered questions: {answeredQuestions}
                  </Card.Text>
                </Row>
                <Row className="mt-1">
                  <Card.Text className='mb-2'>
                    Created questions: {createdQuestions}
                  </Card.Text>
                </Row>
              </Container>
            </Col>
            <Col lg="1">
              <Card style={{width: '5.5rem', height: '5.5rem'}}>
                <Card.Header as="h6">Score</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {answeredQuestions + createdQuestions}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

ScoreListItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  createdQuestions: PropTypes.number.isRequired,
};

export default ScoreListItem;
