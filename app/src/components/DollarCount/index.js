import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class DollarCount extends Component {
  render() {
    return (
      <div className={styles.dollarCount}>
        <div className={styles.amount}>
          <Link to="/taxes">
            <span className={styles.amountSumTitle}>Revenue Collected</span>
            <h3 className={styles.amountSum}>$1,000,000.00</h3>
          </Link>
        </div>
        <div className={styles.amount}>
          <Link to="/services">
            <span className={styles.amountSumTitle}>Service Spending</span>
            <h3 className={styles.amountSum}>$1,000,000.00</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default DollarCount;
