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
          {
            deptChangeList.length === 0 &&
            <h4>You haven't made any changes yet. Stop being lazy and build a budget!</h4>
          }
          {
            deptChangeList.length > 0 &&
              <div>
                <h4>Services</h4>
                <p>You opted to {this.props.getIncreaseOrDecrease(generalFund2016, servicesSum)} overall service spending from last year's amount.</p>
                <div className={styles.body}>
                { deptChangeList.map((dept) =>
                    <ChangedItem dept={dept} />
                  )
                }
              </div>
            </div>
          }
        </div>

        <div className={styles.cardFooter}>
          <Link to="/services">Edit Services</Link>
        </div>
      </div>
    );
  }
}

export default ServicesSummaryCard;
