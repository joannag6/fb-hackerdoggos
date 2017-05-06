import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="header-green" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo center">Voice</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
