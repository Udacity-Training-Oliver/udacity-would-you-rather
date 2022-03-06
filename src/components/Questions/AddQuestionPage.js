import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { handleAddQuestion } from '../../actions/questions';

export default function AddQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authedUser = useSelector((state) => state.authedUser);

  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  // Save the currently selected user to the local store
  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'optionOne':
        setOptionOneText(e.target.value);
        break;
      case 'optionTwo':
        setOptionTwoText(e.target.value);
        break;
      default:
        alert(`Invalid form field ${e.target.name}`);
    }
  }

  // Login functionality: After a user has been selected submit updated the 
  // authed user in the Redux-Store and navigates to the prior location
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(authedUser, optionOneText, optionTwoText));
    return navigate('/');
  }

  return (
    <main>
      <h1 className="m-3">Create New Question</h1>

      <p className="m-3">Complete the question: </p>

      <h2 className='m-3'>Would you rather...</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="m-3 w-50"
          type="text"
          name="optionOne"
          value={optionOneText}
          onChange={handleChange}
        />

        <div className="divider m-3 w-50"><strong>OR</strong></div>
        
        <Form.Control
          className="m-3 w-50"
          type="text"
          name="optionTwo"
          value={optionTwoText}
          onChange={handleChange}
        />

        <Button className="m-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </main>
  );
}
