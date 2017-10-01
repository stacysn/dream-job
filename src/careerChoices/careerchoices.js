import React, { Component } from 'react';

class CareerChoices extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <header className="careermainbox">
        <div className="career-image">
          <div className="circle-container">

            <div className="mentor1">
                <a className="waves-effect waves-light btn pink button" onClick={this.props.switchToFirstStep}>Web Dev button!</a>
            </div>

            <div className="mentor2 ">
            </div>

            <div className="mentor3">
            </div>

            <div className="mentor4">
            </div>

            <div className="mentor5">
            </div>

            <div className="mentor6">
            </div>

          </div>
        </div>

      </header>
    )
  }
}

export default CareerChoices;


// <div className="mentor4 circle-text padding top-circles">
//   <div className="inside-text">Software Engineer!</div>
// </div>
//
// <div className="mentor5 circle-text padding top-circles">
//   <div className="inside-text">Product Manager!</div>
// </div>
//
// <div className="mentor6 circle-text padding top-circles">
//   <div className="inside-text">Digital Marketing!</div>
// </div>
