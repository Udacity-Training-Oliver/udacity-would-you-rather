import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  });

  const loading = useSelector((state) => state.authedUser === null);

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          {loading === true
            ? null
            :
            <div>
              Hello "Would you rather"
            </div>}
        </div>
      </Fragment>
    </Router>
  );
}
