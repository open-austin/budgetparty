import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ServiceIcon extends Component {
  render() {
    debugger
    const { name, departments } = this.props.group;
    return (
      <div>
        {/*<Link to={`/services/${name}`}/>*/}
          <p>{name}</p>
        {/*<Link />*/}
      </div>
    )
  }
}

export default ServiceIcon;
