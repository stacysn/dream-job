import React, { Component } from 'react';
import './App.css';
import CareerChoices from './careerChoices/careerchoices'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dream Job</h1>
        </header>
        <CareerChoices />
      </div>
    );
  }
}

export default App;
