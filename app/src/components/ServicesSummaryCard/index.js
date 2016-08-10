import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class ServicesSummaryCard extends Component {
  render() {
    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <h4>Services</h4>
          <p>You opted to increase our services spending. est recusabo signiferumque, deleniti vivendum imperdiet et mei</p>
        </div>
        <div className={styles.body}>
          {/* TODO filter 4 biggest changes by percentage.
            display upArrow or downArrow alongside*/}
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
