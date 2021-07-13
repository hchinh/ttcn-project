import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';
import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

AdminPage.propTypes = {};

function AdminPage(props) {
  return (
    <div className="container-fluid ">
      <div className="row">
        <TopBar />
      </div>
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
