import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressBar, Card, Container, Row, Col} from 'react-bootstrap';

const AlreadyVotedQuestion = (props) => {
  const {author, question} = props;
  const authedUser = useSelector((state) => state.authedUser);

  const usersVote = question.optionOne.votes
      .includes(authedUser) ? 'optionOne' : 'optionTwo';

  const votesOptionOne = question.optionOne.votes.length;
  const votesOptionTwo = question.optionTwo.votes.length;
  const totalVotes = votesOptionOne + votesOptionTwo;

  const percentOptionOne = (100 / totalVotes) * votesOptionOne;
  const percentOptionTwo = (100 / totalVotes) * votesOptionTwo;

  return (
    <Card className='m-3' style={{width: '32rem'}}>
      <Card.Header as="h5">{`Asked by ${author.name}`}</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col lg={4}>
              <Card.Img width={113} variant="Top" alt='Avatar'
                src={`${process.env.PUBLIC_URL}/${author.avatarURL}`} />
            </Col>
            <Col lg={8}>
              <Card.Title>Results:</Card.Title>

              <Card.Text className="mt-4">
                Would you rather {question.optionOne.text}?
              </Card.Text>
              <ProgressBar
                label={`${percentOptionOne.toFixed(2)}%`}
                now={percentOptionOne} />
              <Card.Text>
                {votesOptionOne} of {totalVotes}
                {usersVote === 'optionOne' ? ' (your vote)' : ''}
              </Card.Text>

              <Card.Text className="mt-4">
                Would you rather {question.optionTwo.text}?
              </Card.Text>
              <ProgressBar
                label={`${percentOptionTwo.toFixed(2)}%`}
                now={percentOptionTwo} />
              <Card.Text>
                {votesOptionTwo} of {totalVotes}
                {usersVote === 'optionTwo' ? ' (your vote)' : ''}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card >
  );
};

AlreadyVotedQuestion.propTypes = {
  author: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
};

export default AlreadyVotedQuestion;
