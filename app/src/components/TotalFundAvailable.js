import React from 'react'
import { FormattedNumber } from 'react-intl'
import PropTypes from 'prop-types';

const TotalFundAvailable = (props) => {
  const { generalFund, generalFundsRemaining } = props.funds
  const remainingAmount = generalFundsRemaining === null ? generalFund : generalFundsRemaining

  return (
    <div className="TotalFundsAvailable">
      <h4 className="TotalFundsAvailable__header">
        Total Funds<br/>
        Available
      </h4>
      <h4 className="TotalFundsAvailable__dollars">
        <FormattedNumber
          value={remainingAmount}
          style="currency" //eslint-disable-line
          currency="USD"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
      </h4>
    </div>
  )
}

export default TotalFundAvailable

TotalFundAvailable.propTypes = {
  funds: PropTypes.shape({
    generalFund: PropTypes.number,
    generalFundsRemaining: PropTypes.number,
  }).isRequired,
};
