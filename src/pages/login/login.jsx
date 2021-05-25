import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import LoginForm from './form';
import { isLoggedInSelector, tokenSelector, userSelector } from '../../store/flow/auth/selector';
import { login } from '../../store/flow/auth/actions';

const Login = ({
// eslint-disable-next-line react/prop-types
  location, token, isLoggedIn, dispatchLogin,
}) => {
  if (token && isLoggedIn) {
    const referer = location.state ? location.state.referer : '/' || '/login';
    return <Redirect to={referer} />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { role } = useParams();
  return <LoginForm onSubmitHandler={dispatchLogin} role={role} />;
};

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedInSelector(state),
  token: tokenSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = {
  dispatchLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
