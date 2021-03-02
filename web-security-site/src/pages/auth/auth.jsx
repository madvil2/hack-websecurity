import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoggedInSelector, tokenSelector, userSelector } from '../../store/flow/auth/selector';
import { loginClient, codeClient } from '../../store/flow/auth/actions';
import AuthForm from './form/authForm.jsx';

const Login = ({
                 // eslint-disable-next-line react/prop-types
                 location, token, isLoggedIn, dispatchLogin, dispatchCode,
               }) => {
  if (token && isLoggedIn) {
    const referer = location.state ? location.state.referer : '/' || '/login';
    return <Redirect to={referer} />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return <AuthForm onSubmitHandler={dispatchLogin} onCodeHandler={dispatchCode} />;
};

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedInSelector(state),
  token: tokenSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = {
  dispatchLogin: loginClient,
  dispatchCode: codeClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
