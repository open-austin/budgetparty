import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl'

import Navigation from './Navigation'

import envelopeIcon from '../images/submit.svg'

const Submit = (props) => {
  const { services, departments, funds } = props;

  return (
    <div>
      <Navigation funds={funds} showBack showTotalFunds />

      <div className="Submit">
        <Switch>
          <Route path="/submit" className="intro" exact render={() => {
            return (
              <div className="Submit__body">
                <img src={'/images/submit.svg'} className="Submit__img" alt="Envelope Icon" />
                <h3 className="Submit__title">Your budget</h3>
                <span className="Submit__desc">
                  <FormattedNumber
                    value={funds.sumOfServiceSpending}
                    style="currency" //eslint-disable-line
                    currency="USD"
                    maximumFractionDigits={0}
                  />
                </span>
                <span className="Submit__smallcaps">
                  <FormattedNumber
                    value={funds.servicesSumPercentChange}
                    maximumFractionDigits={1}
                  />
                  <span>% from last year</span>
                </span>
                <Link to="/submit/review" className="Submit__next-button">
                  Review & Submit
                </Link>
              </div>
            )
          }} />
          <Route path="/submit/review" exact render={() => {
            return (
              <h2>h3</h2>
            )
          }} />
        </Switch>
      </div>

    </div>
  )
}

export default Submit

Submit.propTypes = {
  funds: PropTypes.shape({
    servicesSum: PropTypes.number.isRequired,
  }).isRequired,
}
