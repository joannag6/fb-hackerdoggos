import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import firebase from 'firebase';

import './App.css';
import Header from './components/header';
import ChatBox from './components/chatBox';
import Login from './components/login';

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBUPTO5crN_07EYBGfrN8r0rY41-bZdCxY",
      authDomain: "voice-c4807.firebaseapp.com",
      databaseURL: "https://voice-c4807.firebaseio.com",
      projectId: "voice-c4807",
      storageBucket: "voice-c4807.appspot.com",
      messagingSenderId: "807527296296"
    };
    firebase.initializeApp(config);

    firebase.auth.signOut();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Login}/>
          <Route path="/main" component={ChatBox}/>
        </div>
      </Router>
    );
  }
}

export default App;
