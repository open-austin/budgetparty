import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';
import DepartmentCard from 'components/DepartmentCard';

import styles from './styles.scss';

class ServiceType extends Component {
  render() {
    const { groups, departments } = this.props.data;
    const { groupId } = this.props.params;
    const i = groups.findIndex((group) => group.url === groupId);
    const group = groups[i];

    const departmentsInGroup = departments.filter((dept) => {
      return group.departments.includes(dept.deptId);
    });

    return (
      <div>
        <DollarCount data={this.props.data} />

        <div className={styles.contentBody}>
          <div>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
          </div>
          <div>
            { departmentsInGroup.map((dept, index) =>
              <DepartmentCard
                data={this.props.data}
                dept={dept}
                key={index}
                i={index}
                count={group.departments.length}
                onAmountChange={this.props.changeDepartmentAmount}
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
