import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

class DepartmentCard extends Component {
  handleClick(deptId, percentChange) {
    return () => {
      this.props.changeDepartmentAmount(deptId, percentChange);
      this.props.updateServiceSpendingAmount();
    };
  }
  render() {
    const { departments } = this.props.data;
    const { i, count, deptIndex } = this.props;
    const currentDept = departments[deptIndex];
    const { name, description, amount, lastYearAmount, percentChange, deptId, url } = currentDept;

    let spendingAmount = amount.toLocaleString(
      'en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 6 }
    );

    const percentChangeFormatted = percentChange.toFixed(1);
    let changeMessage;
    if (percentChangeFormatted > 0) {
      changeMessage = (<h4 className={styles.moreThanLastYear}>{percentChangeFormatted}% more than last year</h4>)
    } else if (percentChangeFormatted < 0) {
      changeMessage = (<h4 className={styles.lessThanLastYear}>{Math.abs(percentChangeFormatted)}% less than last year</h4>)
    } else {
      changeMessage = (<h4>0% change from last year</h4>)
    }


    return (
      <div className={styles.cardOutline}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.body}>
          <h4>Spending</h4>
          <h3>{spendingAmount}</h3>
          {changeMessage}
          <div className={styles.adjustButtons}>
            <div
              className={styles.oneMillionRed}
              onClick={this.handleClick(deptId, -1).bind(this)}
            >
              <p>-1%</p>
            </div>
            <div
              className={styles.hundredThousandRed}
              onClick={this.handleClick(deptId, -.1).bind(this)}
            >
              <p>-0.1%</p>
            </div>
            <div
              className={styles.hundredThousandGreen}
              onClick={this.handleClick(deptId, .1).bind(this)}
            >
              <p>+0.1%</p>
            </div>
            <div
              className={styles.oneMillionGreen}
              onClick={this.handleClick(deptId, 1).bind(this)}
            >
              <p>+1%</p>
            </div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <a href="" className={styles.footerItemLeft}>Reset</a>
          <span className={styles.footerItemCenter}>{ `${i+1} of ${count}` }</span>
           <a href={url} target="_blank" className={styles.footerItemRight}>Learn More</a>
        </div>
      </div>
    );
  }
}

export default DepartmentCard;
