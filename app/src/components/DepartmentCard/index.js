import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

class DepartmentCard extends Component {
  render() {
    const { departments } = this.props.data;
    const { i, count } = this.props;
    const currentDept = departments[i];
    const { name, description, amount } = currentDept;

    let spendingAmount = amount.toLocaleString(
      'en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 6 }
    );

    return (
      <div className={styles.cardOutline}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.body}>
          <h4>Spending</h4>
          <h3>{spendingAmount}</h3>
          <div className={styles.adjustButtons}>
            <div
              className={styles.descreaseButton}
              onClick={this.props.onAmountChange(name, -1000000)}
            >
              <p>-1m</p>
            </div>
            <div
              className={styles.descreaseButton}
              onClick={this.props.onAmountChange(name, -1000)}
            >
              <p>-1k</p>
            </div>
            <div
              className={styles.increaseButton}
              onClick={this.props.onAmountChange(name, 1000)}
            >
              <p>+1k</p>
            </div>
            <div
              className={styles.increaseButton}
              onClick={this.props.onAmountChange(name, 1000000)}
            >
              <p>+1m</p>
            </div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <a href="" className={styles.footerItemLeft}>Reset</a>
          <span className={styles.footerItemCenter}>{ `${i+1} of ${count}` }</span>
          <a href="#" className={styles.footerItemRight}>Learn More</a>
        </div>
      </div>
    );
  }
}

export default DepartmentCard;
