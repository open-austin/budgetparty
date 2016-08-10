import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

class UnusedFundsCard extends Component {
  render() {
    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <h4>You have unused funds</h4>
          <h3>$2,000,000</h3>
        </div>
        <div className={styles.body}>
          <p>This could go towards lowering the taxes and fees collected by the city Such as Austin energy rates, transportation user fee, property tax bills, and more.</p>
        </div>
      </div>
    );
  }
}

export default UnusedFundsCard;
