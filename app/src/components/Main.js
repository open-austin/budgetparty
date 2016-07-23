import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Main extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
