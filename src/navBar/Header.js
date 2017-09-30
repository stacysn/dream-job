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

  render(){
    if (!isFirstStep){
      return(
        <div className="changeNavBars">
          
        </div>
      )
    }
  }
}

export default Header;
