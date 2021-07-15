import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from '../components/Category/Category';
import Coupon from '../components/Coupon/Coupon';
import Customer from '../components/Customer/Customer';
import Dashboard from '../components/Dashboard/Dashboard';
import Order from '../components/Order/Order';
import Product from '../components/Product/Product';
import Setting from '../components/Setting/Setting';
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

          <Route path="/admin/categories">
            <Category />
          </Route>

          <Route path="/admin/customers">
            <Customer />
          </Route>

          <Route path="/admin/products">
            <Product />
          </Route>

          <Route path="/admin/coupons">
            <Coupon />
          </Route>

          <Route path="/admin/orders">
            <Order />
          </Route>

          <Route path="/admin/settings">
            <Setting />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default AdminPage;
