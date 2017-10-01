import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class ThirdNavBar extends Component {
    render(){
      return (
        <div className='App-header center'>
          <div className='App-title'>Dream Job</div>
          <div className='thirdStep left'>
            <img src='../images/StatusBar3.png'/>
          </div>

          <div className='profile-page right'>
            <img src='../images/profile-pic.png' height='50px'/>
          </div>

        </div>
      )
    }

}

export default ThirdNavBar;
