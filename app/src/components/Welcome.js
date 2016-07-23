import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Hack the Budget</h1>
          <p className="lead">You can determine the future of your neighborhood and City.</p>
          <Link className="btn btn-lg btn-success" role="button" to="/taxes">Get Started</Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
