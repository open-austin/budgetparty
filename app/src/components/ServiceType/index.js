import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';
import DepartmentCard from 'components/DepartmentCard';

import styles from './styles.scss';

class ServiceType extends Component {
  render() {
    const { groups } = this.props.data.services;
    const { groupId } = this.props.params;
    const i = groups.findIndex((group) => group.url === groupId);
    const group = groups[i];

    return (
      <div>
        <DollarCount data={this.props.data} />

        <div className={styles.contentBody}>
          <div>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
          </div>
          <div>
            { group.departments.map((dept, index) =>
              <DepartmentCard
                dept={dept} key={index} i={index}
              />
            )}
          </div>
        </div>

        <NavBottom />
      </div>
    )
  }
}

export default ServiceType;
