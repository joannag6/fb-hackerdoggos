import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userLoggedIn } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: false };
  }

  onClick() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.addScope('user_birthday');
    provider.addScope('user_birthday');

    provider.setCustomParameters({
      'display': 'popup'
    });

    const instance = this;

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log("SIGNED IN");
      console.log(user);

      instance.props.userLoggedIn(user);
      console.log("RESULT");
      console.log(result);
      console.log("TOKEN");
      console.log(token);
      instance.setState({
        loggedIn: true
      });

      console.log(instance.state.loggedIn);
      // ...
    }).catch(function(error) {
      console.log(error);
      console.log("ERROR OMG");
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    console.log(this.state.loggedIn);
    if (this.state.loggedIn) {
      document.body.className = '';
      return (
        <Route>
          <Redirect push to="/main"/>
        </Route>
      );
    }

    document.body.className += 'not-logged-in';
    return (
      <div className="login-container">
        <img id="big-logo-image" src="media/logo.png" alt="logo"/>
        <div style={{
          color: '#319626',
          cursor: 'default',
          fontFamily: 'Pacifico',
          fontSize: '3em',
          marginBottom: '20px',
          marginTop: '-15px',
          textAlign: 'center',
          textShadow: '2px 2px 1px white'
        }}>Voice</div>

        <a
          className="btn btn-facebook blue"
          onClick={this.onClick.bind(this)}
        >
          <span className="fa fa-facebook-official" style={{marginRight: '10px'}}></span>
          Login with Facebook
        </a>
      </div>
    );
  }
}

export default connect(null, { userLoggedIn })(Login);
