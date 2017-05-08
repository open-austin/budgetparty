import React from 'react'
import { FormattedNumber } from 'react-intl'

const TotalFundAvailable = (props) => {
  const { generalFund, generalFundsRemaining } = props.funds
  const remainingAmount = generalFundsRemaining || generalFund

  return (
    <div className="TotalFundsAvailable">
      <h4 className="TotalFundsAvailable__header">
        Total Funds<br/>
        Available
      </h4>
      <h4 className="TotalFundsAvailable__dollars">
        <FormattedNumber
          value={remainingAmount}
          style="currency"
          currency="USD"
          maximumFractionDigits="0"
        />
      </h4>
    </div>
  )
}

export default TotalFundAvailable
