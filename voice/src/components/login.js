import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {
  onClick() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("TOKEN");
      console.log(token);
      // ...
    }).catch(function(error) {
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

export default Login;
