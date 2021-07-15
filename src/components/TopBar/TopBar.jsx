import React from 'react';
import './TopBar.scss';

TopBar.propTypes = {};

function TopBar(props) {
  return (
    <div className="top-bar">
      <div className="top-bar__wrapper">
        <div className="top-bar__left">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="top-bar__logo"
          />
        </div>
        <div className="top-bar__right">
          <button className="top-bar__button">Add Products</button>
          <div className="top-bar__icons">
            <i class="far fa-bell"></i>
            <span className="top-bar__icon-badge">1</span>
          </div>

          <img
            className="top-bar__avatar"
            src="https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;