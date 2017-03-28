import React, { Component } from 'react'

export default class TotalFundAvailable extends Component {
  render () {
    return (
      <div className="TotalFundsAvailable">
        <h4 className="TotalFundsAvailable__header">
          Total Funds<br/>
          Available
        </h4>
        <h4 className="TotalFundsAvailable__dollars">
          $000,000,000
        </h4>
      </div>
    )
  }
}
