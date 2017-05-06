import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="header-green" role="navigation">
          <div className="nav-wrapper container">
            <div
              id="logo-container"
              href="#"
              className="brand-logo center"
              style={{color: '#319626', cursor: 'default', fontFamily: 'Pacifico'}}>
              <span>Voice</span>
              <img id="logo-image" src="media/logo.png" alt="logo"/>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
