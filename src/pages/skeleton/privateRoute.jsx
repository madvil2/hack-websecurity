import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedInSelector, tokenSelector } from '../../store/flow/auth/selector';

const PrivateRoute = (prop) => {
  const { component: Component, ...rest } = prop;
  const { isLoggedIn } = prop;

  return (
    <Route
      exact
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
      component={(props) => (isLoggedIn ? (
        <Component />
      ) : (
        // eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading
        <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
      ))}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedInSelector(state),
  token: tokenSelector(state),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
