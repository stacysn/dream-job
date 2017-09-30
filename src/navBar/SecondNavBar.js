import React, { Component } from 'react';

class SecondNavBar extends Component {
  if (!this.props.isSecondStep){
    render(){
      return (
        <div className='secondStep'>
          <img src="../images/StatusBar2.png"/>
        </div>

        <div className='profile-page right'>
          <img src='../images/profile-pic.png' height='50px'/>
        </div>
      )
    }
  }
}

export default SecondNavBar;
