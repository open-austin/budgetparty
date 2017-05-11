import React from 'react'
import { FormattedNumber } from 'react-intl'
import PropTypes from 'prop-types';

const ServiceFundsAvailable = (props) => {
  const { title, amount } = props.service
  const displayAmount = amount || 0

  return (
    <div className="ServiceFundsAvailable">
      <h4 className="TotalFundsAvailable__header">
        {title} Spending
      </h4>
      <h4 className="TotalFundsAvailable__dollars">
        <FormattedNumber
          value={displayAmount}
          style="currency" //eslint-disable-line
          currency="USD"
          maximumFractionDigits={0}
        />
      </h4>
    </div>
  )
}

export default ServiceFundsAvailable

ServiceFundsAvailable.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};
