import React, { Component } from 'react';
import GetProfile from './services/getProfile.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
//functions go here


// JSX goes here
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1>The quest for DOM printout</h1>
        </header>
          <GetProfile />
      </div>
    );
  }
}

export default App
