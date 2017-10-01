import React, { Component } from 'react';
import './App.css';
import CareerChoices from './careerChoices/careerchoices'
import Header from './navBar/Header'
import SecondPage from './secondPage/secondPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dream Job</h1>
        </header>
        <Header />
        <CareerChoices />
      </div>
    );
  }
}

export default App;
