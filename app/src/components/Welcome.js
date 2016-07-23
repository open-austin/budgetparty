import React, { Component, PropTypes } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Hack the Budget</h1>
          <p className="lead">You can determine the future of your neighborhood and City.</p>
          <a className="btn btn-lg btn-success" href="#" role="button">Get Started</a>
        </div>
      </div>
    );
  }
}

export default Welcome;
