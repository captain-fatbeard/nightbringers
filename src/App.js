import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="logo" alt="nightbringers" />
        </header>
    );
  }
}

export default App;
