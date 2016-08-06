import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ServiceGroup extends Component {
  render() {
    return (
      <div>
        <p>{this.props.params.groupName}</p>
      </div>
    )
  }
}

export default ServiceGroup;
