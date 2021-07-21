import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';
SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <NavLink to="/admin">
              <i className="fas fa-chart-line sidebar__icon"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/products">
              <i className="fa fa-shopping-cart sidebar__icon"></i>
              <span>Products</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/categories">
              <i className="fa fa-list-alt sidebar__icon"></i>
              <span>Categories</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/customers">
              <i className="fa fa-user sidebar__icon"></i>
              <span>Customers</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/orders">
              <i className="fas fa-calendar-check sidebar__icon"></i>
              <span>Orders</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/coupons">
              <i className="fa fa-gift sidebar__icon"></i>
              <span>Coupons</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/settings">
              <i className="fas fa-cog sidebar__icon"></i>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
