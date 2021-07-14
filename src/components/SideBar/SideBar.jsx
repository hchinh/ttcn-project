import React from 'react';
import './SideBar.scss';
SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <i class="fa fa-list-alt sidebar__icon"></i>
            Dashboard
          </li>
          <li className="sidebar__list-item">
            <i class="fa fa-shopping-cart sidebar__icon"></i>
            Products
          </li>
          <li className="sidebar__list-item">
            <i class="fa fa-list-alt sidebar__icon"></i>
            Categories
          </li>
          <li className="sidebar__list-item">
            <i class="fa fa-user sidebar__icon"></i>
            Customers
          </li>
          <li className="sidebar__list-item">
            <i class="fas fa-calendar-check sidebar__icon"></i>
            Orders
          </li>
          <li className="sidebar__list-item">
            <i class="fa fa-gift sidebar__icon"></i>
            Coupons
          </li>
          <li className="sidebar__list-item">
            <i class="fas fa-cog sidebar__icon"></i>
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
