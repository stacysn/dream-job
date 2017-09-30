import React, { Component } from 'react';


class CareerChoices extends Component {
  render(){
    return(
      <header className="careermainbox">
        <div className="career-image">
          <div className="circle-container">
            <div className="circle-text webdev padding">
              <div>Web Developer!</div>
            </div>
            <div className="circle-text padding">
              <div>Web Designer!</div>
            </div>
            <div className="circle-text padding">
              <div>User Experience!</div>
            </div>
            <div className="circle-text padding">
              <div>Software Engineer!</div>
            </div>
            <div className="circle-text padding">
              <div>Product Manager!</div>
            </div>
            <div className="circle-text padding">
              <div>Digital Marketing!</div>
            </div>
          </div>
        </div>

      </header>
    )
  }
}

export default CareerChoices;
