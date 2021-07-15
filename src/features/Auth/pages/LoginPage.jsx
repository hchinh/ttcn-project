import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../components/Login/Login';

LoginPage.propTypes = {};

function LoginPage(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={Login} />
      </Switch>
    </div>
  );
}

export default LoginPage;
