import React, { Component } from 'react';


class CareerChoices extends Component {
  render(){
    return(
      <header className="careermainbox">
        <div className="career-image">
          <div className="circle-container">

            <div className="webdev circle-text  padding top-circles">
              <div className="inside-text">Web Developer!</div>
            </div>

            <div className="mentor1 circle-text padding top-circles">
              <div className="inside-text">Web Designer!</div>
            </div>

            <div className="mentor2 circle-text padding top-circles">
              <div className="inside-text">User Experience!</div>
            </div>

            <div className="mentor3 circle-text padding bottom-circles">
              <div className="inside-text">Software Engineer!</div>
            </div>

            <div className="mentor4 circle-text padding bottom-circles">
              <div className="inside-text">Product Manager!</div>
            </div>

            <div className="mentor5 circle-text padding bottom-circles">
              <div className="inside-text">Digital Marketing!</div>
            </div>

          </div>
        </div>

      </header>
    )
  }
}

export default CareerChoices;
