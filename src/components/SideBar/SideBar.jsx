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
              <i class="fa fa-list-alt sidebar__icon"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/products">
              <i class="fa fa-shopping-cart sidebar__icon"></i>
              <span>Products</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/categories">
              <i class="fa fa-list-alt sidebar__icon"></i>
              <span>Categories</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/customers">
              <i class="fa fa-user sidebar__icon"></i>
              <span>Customers</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/orders">
              <i class="fas fa-calendar-check sidebar__icon"></i>
              <span>Orders</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/coupons">
              <i class="fa fa-gift sidebar__icon"></i>
              <span>Coupons</span>
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/admin/settings">
              <i class="fas fa-cog sidebar__icon"></i>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
