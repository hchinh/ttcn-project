import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Customer from '../components/Customer/Customer';
import Dashboard from '../components/Dashboard/Dashboard';
import './Admin.scss';

AdminPage.propTypes = {};

function AdminPage(props) {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/admin" exact>
            <Dashboard />
          </Route>

          <Route path="/admin/customers">
            <Customer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default AdminPage;
