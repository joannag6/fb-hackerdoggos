import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import './App.css';
import ChatBox from './components/chatBox';
import Login from './components/login';

const createStoreWithMiddleware = applyMiddleware()(createStore);

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

    var user = firebase.auth().currentUser;

    // if (user) {
    //   // User is signed in.
    //   firebase.auth.signOut();
    // }
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path="/main" component={ChatBox}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
