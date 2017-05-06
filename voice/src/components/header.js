import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderStatus() {
    console.log("RENDERING PIC");
    console.log(this.props.user.user);
    if (this.props.user.user !== {}) {

      return (
        <a className="right" style={{cursor: 'pointer'}}>
          <img id="profile-pic" src={this.props.user.user.photoURL} />
        </a>
      );
    }
    // return (
    //   <a className="right" style={{cursor: 'pointer'}}>
    //     <img id="profile-pic" src="media/dp.jpg" alt="profile pic"/>
    //   </a>
    // );
  }

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
