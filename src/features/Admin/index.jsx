import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

AdminFeature.propTypes = {};

function AdminFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path="" />
        <Route />
      </Switch>
    </div>
  );
}

export default AdminFeature;
