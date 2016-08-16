import React, { Component, PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';

import styles from './styles.scss';
import yourBudgetIcon from 'images/icons/YourBudget.gif';


class YourBudgetCard extends Component {
  render() {
    const { generalFund2016, servicesSum } = this.props.data;
    const initialServicesSum = 867226871;
    const text = this.props.getIncreaseOrDecrease(initialServicesSum, servicesSum, true);
    const difference = Math.abs(this.props.getDifference(initialServicesSum, servicesSum));
    const percent = Math.abs(this.props.getPercentChange(initialServicesSum, servicesSum));

    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <img src={yourBudgetIcon}
            className={styles.icon}
            alt="Your Budget Results icon"
          />
          <h3>Your Budget</h3>
          <h4>
            <FormattedNumber
              value={this.props.data.servicesSum}
              style="currency"
              currency="USD"
              maximumSignificantDigits={6}
            />
          </h4>
        </div>
        <div className={styles.cardBody}>
          <p>
            You {' '}
            <span className={styles.strong}>
              {text}
            </span>
            {' '} department budgets  <br />
            by {' '}
            <FormattedNumber
              value={difference}
              style="currency"
              currency="USD"
              maximumSignificantDigits={5}
            />
            {' '} or {' '}
            <FormattedNumber
              value={percent}
              style="percent"
              maximumSignificantDigits={2}
            />
            {' '} <br />
            compared to the previous year.
            </p>
        </div>
      </div>
    );
  }
}

export default YourBudgetCard;
