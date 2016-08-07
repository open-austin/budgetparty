import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ServiceType extends Component {
  render() {
    return (
      <div>
        <p>{this.props.params.groupName}</p>
      </div>
    )
  }
}

export default ServiceType;
