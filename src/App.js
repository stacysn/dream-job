import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './navBar/Header'
import CareerChoices from './careerChoices/careerchoices'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Header />
        <CareerChoices />
      </div>
    );
  }
}

export default App;
