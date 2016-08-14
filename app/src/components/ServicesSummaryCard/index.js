import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ChangedItem from 'components/ChangedItem';

import styles from './styles.scss';

class ServicesSummaryCard extends Component {
  render() {
    const { generalFund2016, servicesSum, departments } = this.props.data;
    const deptChangeList = this.props.getBiggestChangeList(departments)

    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <h4>Services</h4>
          <p>You opted to {this.props.getIncreaseOrDecrease(generalFund2016, servicesSum)} overall service spending from last year's amount.</p>
        </div>
        <div className={styles.body}>
          { deptChangeList.map((dept) =>
            <ChangedItem dept={dept} />
          )}
          <p>Increase Something</p>
          <p>Decrease Something</p>
          <p>Increase Something</p>
          <p>Decrease Something</p>
        </div>
        <div className={styles.cardFooter}>
          <Link to="/services">Edit Services</Link>
        </div>
      </div>
    );
  }
}

export default ServicesSummaryCard;
