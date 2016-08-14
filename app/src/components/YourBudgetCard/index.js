import React, { Component, PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';

import styles from './styles.scss';

class YourBudgetCard extends Component {
  render() {
    const { generalFund2016, servicesSum } = this.props.data;

    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <img src="../../src/images/icons/YourBudget.gif"
            className={styles.icon}
            alt="Your Budget Results icon"
          />
          <h3>Your Budget</h3>
          <h4>
            <FormattedNumber
              value={this.props.data.servicesSum}
              style="currency"
              currency="USD"
              maximumSignificantDigits="6"
            />
          </h4>
        </div>
        <div className={styles.cardBody}>
          <p>
            You {' '}
            <span className={styles.strong}>
              {this.props.getIncreaseOrDecrease(generalFund2016, servicesSum)}
            </span>
            {' '} the budget  <br />
            by {' '}
            <FormattedNumber
              value={this.props.getDifference(generalFund2016, servicesSum)}
              style="currency"
              currency="USD"
              maximumSignificantDigits="5"
            />
            {' '} or {' '}
            <FormattedNumber
              value={this.props.getPercentChange(generalFund2016, servicesSum)}
              style="percent"
              maximumSignificantDigits="2"
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
