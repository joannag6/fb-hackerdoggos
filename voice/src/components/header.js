import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="header-green" role="navigation">
          <div className="nav-wrapper container">
            <a
              id="logo-container"
              href="#"
              className="brand-logo center"
              style={{fontFamily: 'Pacifico', textShadow: '1px 1px black'}}
            >
              Voice
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
