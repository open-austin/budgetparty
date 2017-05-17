import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl'

import Navigation from './Navigation'
import ProgressBar from './ProgressBar'

import backArrow from '../images/back_arrow.svg'
import forwardArrow from '../images/forward_arrow.svg'

const Submit = (props) => {
  const { services, departments, funds } = props;

  return (
    <div>
      <Navigation funds={funds} showBack showTotalFunds />

      <div className="Submit">
        <Switch>
          <Route path="/submit" className="intro" exact render={() => {
            return (
              <div className="Submit__intro-body">
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
              <div>
                <div className="Submit__review-header">
                  <img src="/images/submit.svg" alt="Envelope Icon" />
                </div>
                <div className="Submit__body">
                  <h3>Review Your Budget Changes</h3>
                  <h4 className="Submit__review-subtitle">You opted to increase overall service spending from last years amount.</h4>
                  {services.map((service) => {
                    const incDecText = service.percentChange > 0 ? 'Increased' : 'Decreased'

                    // Skip Welcome & Submit
                    if (service.index === 0 || service.index === 5) return

                    return (
                      <p className="Submit__review-service-list">{incDecText} {service.title} by {service.percentChange || 0}%</p>
                    )
                  })}
                  <Link to="/dashboard" className="Submit__revise-link">Revise Service Spending</Link>
                  <div className="Submit__review-buttons">
                    <Link to="/submit" className="Department__edit-button">
                      <div className="flexconatiner">
                        <img src={backArrow} alt="Back Arrow" className="left" style={{ padding: '6px 0 0 10px' }} />
                        <span className="right" style={{ paddingRight: '20px' }}>Prev</span>
                      </div>

                    </Link>
                    <Link to="/submit/save" className="Department__done-button">
                      <span className="left" style={{ paddingLeft: '20px' }}>Next</span>
                      <img src={forwardArrow} alt="Back Arrow" className="right" style={{ padding: '6px 10px 0 0' }} />
                    </Link>
                  </div>
                  <ProgressBar x={1} y={2} />
                </div>
              </div>
            )
          }} />
          <Route path="/submit/save" exact render={() => {
            return (
              <div className="Submit__save-body">
                <h3 className="Submit__title">Save & Submit</h3>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Email" />

                <label htmlFor="comments">Comments</label>
                <textarea type="textarea" name="comments" id="comments" placeholder="Comments" />

                <div className="Submit__review-buttons">
                  <Link to="/submit/review" className="Service__edit-button">
                    Revise
                  </Link>
                  <Link to="/done" className="Service__done-button">
                    Submit
                  </Link>
                </div>

                <ProgressBar x={2} y={2} />
              </div>
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
