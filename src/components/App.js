import React, { useEffect, Fragment } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleInitialData } from '../actions/shared';
import HomePage from './Home/HomePage';
import AddQuestionPage from './Questions/AddQuestionPage';
import LeaderBoardPage from './LeaderBoard/LeaderBoardPage';
import LoginPage from './Login/LoginPage';
import Menu from './Menu/Menu';

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
                <Menu />
              </header>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddQuestionPage />} />
                <Route path="/leaderboard" element={<LeaderBoardPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>}
        </div>
      </Fragment>
    </Router>
  );
}
