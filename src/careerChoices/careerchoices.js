import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CareerChoices extends Component {
  render(){
    return(
      <header className="careermainbox">
        <div className="career-image">
          <div className="circle-container">
            <div className="circle-text">
              <div>Web Developer!</div>
            </div>
            <div className="circle-text">
              <div>Web Designer!</div>
            </div>
            <div className="circle-text">
              <div>User Experience!</div>
            </div>
            <div className="circle-text">
              <div>Software Engineer!</div>
            </div>
            <div className="circle-text">
              <div>Product Manager!</div>
            </div>
            <div className="circle-text">
              <div>Digital Marketing!</div>
            </div>
          </div>
        </div>

      </header>
    )
  }
}

export default CareerChoices;
