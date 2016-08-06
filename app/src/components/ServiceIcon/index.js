import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ServiceIcon extends Component {
  render() {
    const { name, departments } = this.props.group;
    let urlParam = name.toLowerCase().split(' ').join("_");
    return (
      <div>
        <Link to={`/services/${urlParam}`}>
          <p>{name}</p>
        </Link>
      </div>
    )
  }
}

export default ServiceIcon;
