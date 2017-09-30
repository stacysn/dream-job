import React, { Component } from 'react';
import './App.css';
import Header from './navBar/Header';
import CareerChoices from './careerChoices/careerchoices';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        <CareerChoices />
      </div>
    );
  }
}

export default App;
