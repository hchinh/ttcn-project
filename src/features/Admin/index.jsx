import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

AdminFeature.propTypes = {};

function AdminFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default AdminFeature;
