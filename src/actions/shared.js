import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis'

// Redux thunk action creator (pattern for asynchronous requests)
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData()
    .then(({users, tweets}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    })
};
