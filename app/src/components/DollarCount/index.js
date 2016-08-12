import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class DollarCount extends Component {
  render() {
    let generalFund = this.props.data.generalFund.
      toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 6 });
    let servicesSum = this.props.data.servicesSum.
      toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 6 });

    return (
      <div className={styles.dollarCount}>
        <div className={styles.amount}>
          <Link to="/fund">
            <span className={styles.amountSumTitle}>Available Funds</span>
            <h3 className={styles.amountSum}>{generalFund}</h3>
          </Link>
        </div>
        <div className={styles.amount}>
          <Link to="/services">
            <span className={styles.amountSumTitle}>Service Spending</span>
            <h3 className={styles.amountSum}>{servicesSum}</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default DollarCount;
