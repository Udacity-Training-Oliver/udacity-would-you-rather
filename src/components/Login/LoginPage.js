import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useLocation} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import {setAuthedUser} from '../../actions/authedUser';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const SELECT_TEXT = 'Select user from list';

  // Save location from which the login page has been requested (default="/"),
  // so that it is possible to jump back after login
  const from = location.state?.from?.pathname || '/';

  // Get users list and create local store for the selected user to login
  const users = useSelector((state) => Object.values(state.users));
  const [selectedUser, setSelectedUser] = useState(SELECT_TEXT);

  // Logoff functionality: Get authed user from Redux-Store and set it to null
  // if a user is already logged in and remove currently saved tab.
  const authedUser = useSelector((state) => state.authedUser);
  useEffect(() => {
    if (authedUser !== null) {
      dispatch(setAuthedUser(null));
      localStorage.removeItem('authedUser');
      localStorage.removeItem('CurrentHomePageTab');
    }
  });

  // Save the currently selected user to the local store
  const handleChange = (e) => {
    e.preventDefault();
    const uiSelectedUser = e.target.value;
    setSelectedUser(uiSelectedUser);
  };

  // Login funcality: After a user has been selected submit updated the
  // authed user in the Redux-Store and navigates to the prior location
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectedUser));
    localStorage.setItem('authedUser', selectedUser);
    navigate(from, {replace: true});
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="formLogin">
          <Form.Label>User</Form.Label>
          <Form.Select
            onChange={handleChange}
            aria-label={SELECT_TEXT}>
            <option>{SELECT_TEXT}</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button className="m-3" variant="primary" type="submit"
          disabled={selectedUser === SELECT_TEXT}>
          Login
        </Button>
      </Form>

    </main>
  );
};

export default Login;

