import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ChatBox from './components/chatBox';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ChatBox />
      </div>
    );
  }
}

export default App;
