import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class FirstNavBar extends Component {
    render(){
      return (
        <div>
          <div className='firstStep left'>
            <img src='../images/StatusBar1.png'/>
          </div>

          <div className='profile-page right'>
            <img src='../images/profile-pic.png' height='50px'/>
          </div>

        </div>
      )
    }

}

export default FirstNavBar;
