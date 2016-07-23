import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div>
        <p>Top Nav</p>
        {React.cloneElement(this.props.children, this.props)}
        <p>Bottom Nav</p>
      </div>
    );
  }
}

export default Main;
