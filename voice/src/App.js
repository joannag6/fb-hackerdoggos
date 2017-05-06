import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Button />
      </div>
    );
  }
}

export default App;
