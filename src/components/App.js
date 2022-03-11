import React, {useEffect, Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LoadingBar from 'react-redux-loading';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Home/HomePage';
import QuestionPage from './Questions/QuestionPage';
import AddQuestionPage from './Questions/AddQuestionPage';
import LeaderBoardPage from './LeaderBoard/LeaderBoardPage';
import LoginPage from './Login/LoginPage';
import Menu from './Menu/Menu';
import AuthRequired from './Login/AuthRequired';
import NotFound from './NotFound/NotFound';
import {handleInitialData} from '../actions/shared';
import {setAuthedUser} from '../actions/authedUser';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
    const authedUser = localStorage.getItem('authedUser');
    if (authedUser !== null) {
      dispatch(setAuthedUser(authedUser));
    }
  }, [dispatch]);

  const loading = useSelector((state) => state.loadingBar?.default !== 0);

  return (
    <Router>
      <Fragment>
        <div>
          <LoadingBar />
          {loading === true ? null :
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

                <Route path='/questions/:id' element={
                  <AuthRequired>
                    <QuestionPage />
                  </AuthRequired>} />

                <Route path="/add" element={
                  <AuthRequired>
                    <AddQuestionPage />
                  </AuthRequired>} />

                <Route path="/leaderboard" element={
                  <AuthRequired>
                    <LeaderBoardPage />
                  </AuthRequired>} />

                <Route path='*' element={<NotFound />} />

              </Routes>
            </div>
          }
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
