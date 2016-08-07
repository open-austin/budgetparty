import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';

class ServiceType extends Component {
  render() {
    const { group, params } = this.props.data.services;
    debugger
    return (
      <div>
        <DollarCount data={this.props.data} />

        <div>
          <p>{group.name}</p>
        </div>

        <NavBottom />
      </div>
    )
  }
}

export default ServiceType;
