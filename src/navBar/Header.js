import React, { Component } from 'react';

class Header extends Component {
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

switchToSecondStep = (event) => {
  this.setState({isThirdStep: true})
}

  render(){
      return(

          <div className='start-image'>
          </div>
      )
  }

}

export default Header;
