import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CareerChoices extends Component {
  render(){
    return(
      <header className="careermainbox">
        <div className="career-image">
          <Link  className='webdeveloper-link' to='/webdeveloper'>Web Developer</Link>
        </div>
      </header>
    )
  }
}

export default CareerChoices;
