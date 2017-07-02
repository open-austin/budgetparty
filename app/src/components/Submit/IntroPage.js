import React from 'react'
import { FormattedNumber } from 'react-intl'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const IntroPage = (props) => {
  const { funds } = props

  return (
    <div className="Submit__intro-body">
      <img src={'/images/submit.svg'} className="Submit__img" alt="Envelope Icon" />
      <h3 className="Submit__title">Your budget</h3>
      <span className="Submit__desc">
        <FormattedNumber
          value={funds.sumOfServiceSpending}
          style="currency" //eslint-disable-line
          currency="USD"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
      </span>
      <span className="Submit__smallcaps">
        <FormattedNumber
          value={funds.servicesSumPercentChange}
          minimumFractionDigits={0}
          maximumFractionDigits={1}
        />
        <span>% from last year</span>
      </span>
      <Link to="/submit/review" className="Submit__next-button">
        Review & Submit
      </Link>
    </div>
  )
}

export default IntroPage

IntroPage.propTypes = {
  funds: PropTypes.shape({
    sumOfServiceSpending: PropTypes.number.isRequired,
    servicesSumPercentChange: PropTypes.number.isRequired,
  }).isRequired,
}
