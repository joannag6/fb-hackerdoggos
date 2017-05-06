import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ChatBox from './components/chatBox';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChatBox />
        <Button />
      </div>
    );
  }
}

export default App;
