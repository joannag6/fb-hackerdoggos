import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderStatus() {
    console.log("RENDERING PIC");
    console.log(this.props.user.user);
    if (this.props.user.user !== {}) {

      return (
        <a className="right">
          <img id="profile-pic" src={this.props.user.user.photoURL} />
          <div id="display-name">{this.props.user.user.displayName}</div>
        </a>
      );
    }
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="header-green" role="navigation">
          <div className="nav-wrapper container">
            <div
              href="#"
              className="brand-logo center">
              <span style={{color: '#319626', cursor: 'default', fontFamily: 'Pacifico'}}>Voice</span>
              <img id="logo-image" src="media/logo.png" alt="logo"/>
            </div>
            {this.renderStatus()}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state };
};

export default connect(mapStateToProps)(Header);
