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
import AuthRequired from './Login/AuthRequired';
import NotFound from './NotFound/NotFound';
import LeaderBoard from './LeaderBoard/LeaderBoardPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
    //TODO Move to Login
    // dispatch(setAuthedUser('tylermcginnis'));    
  }, [dispatch]);

  const loading = useSelector((state) => state.loadingBar?.default !== 0);

  return (
    <Router>
      <Fragment>
        <div>
          <LoadingBar />
          {loading === true
            ? null
            :
            <div>
              <header>
                <Menu />
              </header>
              <Routes>
                <Route path="/login" element={
                  <LoginPage />} />

                <Route path="/" element={
                  <AuthRequired>
                    <HomePage />
                  </AuthRequired>} />

                <Route path="/add" element={
                  <AuthRequired>
                    <AddQuestionPage />
                  </AuthRequired>} />

                <Route path="/leaderboard" element={
                  <AuthRequired>
                    <LeaderBoard />
                  </AuthRequired>} />

                <Route path='*' element={<NotFound />} />

              </Routes>
            </div>
          }
        </div>
      </Fragment>
    </Router>
  );
}
