import React, { Component, PropTypes } from 'react';

class DepartmentCard extends Component {
  render() {
    const { name } = this.props.dept;
    return (
      <h3>{name}</h3>
    );
  }
}

export default DepartmentCard;
