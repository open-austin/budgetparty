import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import TotalFundAvailable from './TotalFundAvailable'
import ServiceFundsAvailable from './ServiceFundsAvailable'

import avatar from '../images/avatar.svg'
import back from '../images/back.svg'
import close from '../images/close.svg'

const Navigation = (props) => {
  const {
    centerText,
    history,
    showClose,
    showBack,
    showUser,
    showTotalFunds,
    showServiceFunds,
    funds,
    service,
    user,
  } = props

  return (
    <nav className="Navigation">
      {
        showBack &&
          <Link to="/dashboard" className="flex">
            <img
              src={back}
              alt="Go Back to Dashboard"
              className="Navigation__icon--left"
            />
          </Link>
      }
      {
        showUser &&
          <div className="Navigation__user-container">
            <Link to="/user">
              <img src={(user && user.photoURL) || avatar} alt="User Account" className="Navigation__icon--left" />
            </Link>
            <p className="Navigation__welcome-message">{(user && user.displayName) || (user && user.email)}</p>
          </div>
      }
      { showTotalFunds && <TotalFundAvailable funds={funds} /> }
      { showServiceFunds && <ServiceFundsAvailable service={service} /> }
      {
        showClose &&
          <div className="Navigation__special-header">
            <div className="flex Navigation__center-text">{centerText}</div>
            <div className="flex">
              <img
                src={close} alt="Go Back to Department"
                className="Navigation__icon--right"
                onClick={history.goBack}
              />
            </div>
          </div>
      }
    </nav>
  )
}

export default Navigation

Navigation.propTypes = {
  showClose: PropTypes.bool,
  showBack: PropTypes.bool,
  showUser: PropTypes.bool,
  showTotalFunds: PropTypes.bool,
  showServiceFunds: PropTypes.bool,
  funds: PropTypes.shape({
    generalFund: PropTypes.number,
    servicesSum: PropTypes.number,
    generalFund2016: PropTypes.number,
  }),
  service: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.number,
  }),
  history: PropTypes.object,
  centerText: PropTypes.string,
  user: PropTypes.object,
};
