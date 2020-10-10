import React, { useState } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import store from './store';
import Login from "./pages/login";
import Auth from "./pages/auth";
import PrivateRoute from "./pages/skeleton/privateRoute";
import AdminPage from "./pages/protected/admin/admin.jsx";
import Skeleton from "./pages/skeleton";
import {isLoggedInSelector, tokenSelector} from "./store/flow/auth/selector";
import {logout} from "./store/flow/auth/actions";

let App = ({
               token,
               isLoggedIn,
           }: any) => {

    return (
  <Provider store={store}>
      <div className="App">
          <Router>
              <Switch>
                  <Route
                      exact
                      path="/login"
                      component={(prop: any) => (
                          <Auth {...prop} />
                      )}
                  />
                  <Route
                      exact
                      path="/login/:role"
                      component={(prop: any) => (
                          <Login {...prop} />
                      )}
                  />
                  <PrivateRoute
                      exact path="/admin"
                      component={(prop: any) => <AdminPage {...prop} />}
                  />
                  <PrivateRoute
                      path="/"
                      component={(prop: any) => <Skeleton {...prop} />}
                  />
              </Switch>
          </Router>
      </div>
  </Provider>
  );
};


const mapStateToProps = (state: any) => ({
    isLoggedIn: isLoggedInSelector(state),
    token: tokenSelector(state),
});

const mapDispatchToProps = {
    dispatchLogout: logout,
};

// @ts-ignore
App = connect(mapStateToProps, mapDispatchToProps)(App);

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppWithStore;
