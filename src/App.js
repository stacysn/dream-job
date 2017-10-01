import React, { Component } from 'react';
import './App.css';
import CareerChoices from './careerChoices/careerchoices'
import Header from './navBar/Header'
import FirstNavBar from './navBar/FirstNavBar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFirstStep: false,
      isSecondStep: false,
      isThirdStep: false
    }
  }

switchToFirstStep = (event) => {
  this.setState({isFirstStep: true})
}

switchToSecondStep = (event) => {
  this.setState({isSecondStep: true})
}

switchToThirdStep = (event) => {
  this.setState({isThirdStep: true})
}

  render() {
    if (!this.state.isFirstStep){
      return (
        <div className="App">
        <header className="App-header">
        <h1 className="App-title">Dream Job</h1>
        </header>
        <Header />
        <CareerChoices switchToFirstStep={(event)=>this.switchToFirstStep(event)}/>
        </div>
      );
    } else if (this.state.isFirstStep){
      return(
        <FirstNavBar />
      )
    }

    }
}

export default App;
