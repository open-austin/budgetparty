import React, { Component, PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';

import styles from './styles.scss';

class UnusedFundsCard extends Component {
  render() {
    const { generalFund, servicesSum } = this.props.data;
    const initialServicesSum = 867226871;
    const unused = Math.abs(this.props.getDifference(generalFund, servicesSum));

    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <h4>You have unused funds</h4>
          <h3>
            <FormattedNumber
              value={unused}
              style="currency"
              currency="USD"
              maximumSignificantDigits={5}
            />
          </h3>
        </div>
        <div className={styles.body}>
          <p>This could go towards lowering the taxes and fees collected by the city such as Austin Energy rates, the transportation user fee, property tax bills, and more.</p>
        </div>
      </div>
    );
  }
}

export default UnusedFundsCard;
