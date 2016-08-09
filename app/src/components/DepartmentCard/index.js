import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

class DepartmentCard extends Component {
  render() {
    const { name, description, amount } = this.props.dept;
    const { i, count } = this.props;

    let spendingAmount = amount.toLocaleString(
      'en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 6 }
    );

    return (
      <div className={styles.departmentCard}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.body}>
          <h4>Spending</h4>
          <h3>{spendingAmount}</h3>
          <div className={styles.adjustButtons}>
            <div className={styles.descreaseButton}>
              <p>-1m</p>
            </div>
            <div className={styles.descreaseButton}>
              <p>-1k</p>
            </div>
            <div className={styles.increaseButton}>
              <p>+1k</p>
            </div>
            <div className={styles.increaseButton}>
              <p>+1m</p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <a href="" className={styles.footerItemLeft}>Reset</a>
          <span className={styles.footerItemCenter}>{ `${i+1} of ${count}` }</span>
          <a href="#" className={styles.footerItemRight}>Learn More</a>
        </div>
      </div>
    );
  }
}

export default DepartmentCard;
