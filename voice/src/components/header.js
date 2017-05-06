import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="header-green" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo center">Voice</a>
        </div>
      </nav>
    );
  }
}

export default Header;
