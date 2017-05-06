import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="header-green" role="navigation">
          <div className="nav-wrapper container">
            <div
              href="#"
              className="brand-logo center"
              style={{color: '#319626', cursor: 'default', fontFamily: 'Pacifico'}}>
              <span>Voice</span>
              <img id="logo-image" src="media/logo.png" style={{marginLeft: '10px'}} alt="logo"/>
            </div>
            <a className="right" style={{cursor: 'pointer'}}>
              <img id="profile-pic" src="media/dp.jpg" alt="profile pic"/>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
