import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userLoggedIn, tokenObtained } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: false };
  }

  onClick() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.addScope('user_posts');
    provider.addScope('user_friends');
    provider.addScope('publish_actions');

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
      instance.props.tokenObtained(token);
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
      return (
        <Route>
          <Redirect push to="/main"/>
        </Route>
      );
    }
    return (
      <a
        className="btn btn-block btn-social btn-facebook share s_facebook"
        onClick={this.onClick.bind(this)}
      >
        <span className="fa fa-facebook"></span>Login with Facebook
      </a>
    );
  }
}

export default connect(null, { userLoggedIn, tokenObtained })(Login);
