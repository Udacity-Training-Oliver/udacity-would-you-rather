import React, { useEffect, Fragment } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Link
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import HomePage from './Home/HomePage';
import AddQuestionPage from './Questions/AddQuestionPage';
import LeaderBoardPage from './LeaderBoard/LeaderBoardPage';
import LoginPage from './Login/LoginPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const loading = useSelector((state) => state.authedUser === null);

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div>
          {loading === true
            ? null
            :
            <div>
              <header>
                <nav>
                  <ul>
                    <li>
                      <Link  to="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/add">
                        <span>Add Question</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/leaderboard">
                        <span>Leader Board</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <span>Login</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </header>
            </div>}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddQuestionPage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Fragment>
    </Router>
  );
}
