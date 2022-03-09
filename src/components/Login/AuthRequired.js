import React from 'react';
import PropTypes from 'prop-types';
import {useLocation, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

/**
 * Wrapper component that checks whether the authentication has already
 * been taken place.
 * YES: Just return the passed children of this wrapper component
 * NO:  Navigate directly to the login page with the current location to
 *      come back later after a successfull login
 * @param {*} children Wrapped child components
 * @return {*} Child components or Navigate to login page
 */
const AuthRequired = ({children}) => {
  const authedUser = useSelector((state) => state.authedUser);
  const location = useLocation();

  // If there is no authed user in the Redux-Store navigate directly to
  // the login page with the current location.
  if (!authedUser) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
};

AuthRequired.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AuthRequired;
