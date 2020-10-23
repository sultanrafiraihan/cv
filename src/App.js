/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './header';
import routes from './config/route';
import { UserContext } from './userContext';

const isUserAuthenticated = true;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserAuthenticated) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

const App = () => {
  const [value, setValue] = useState('user');
  return (
    <UserContext.Provider value={{ value, setValue }}>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route) => {
            if (route.isPublic) {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
            return (
              <PrivateRoute
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
