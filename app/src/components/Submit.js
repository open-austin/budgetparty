import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import Navigation from './Navigation'

import envelopeIcon from '../images/submit.svg'

const Submit = (props) => {
  const { services, departments, funds } = props;

  return (
    <div>
      <Navigation funds={funds} showBack showTotalFunds />

      <div className="Submit">
        <Switch>
          <Route path="/submit" exact render={() => {
            return (
              <div className="Submit__body">
                <img src={'/images/submit.svg'} className="intro__img" alt="Envelope Icon" />
                <h1 className="Submit__title">hi</h1>
                <p className="Submit__desc">
                  Your budget {funds.servicesSum}
                </p>
                <Link to="/submit/review" className="Submit__next-button">
                  Review & Submit
                </Link>
              </div>
            )
          }} />
          <Route path="/submit/review" exact render={() => {
            return (
              <h2>hi</h2>
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
