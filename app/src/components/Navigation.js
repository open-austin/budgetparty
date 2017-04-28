import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TotalFundAvailable from './TotalFundAvailable'
import ServiceFundsAvailable from './ServiceFundsAvailable'

import avatar from '../images/avatar.svg'
import back from '../images/back.svg'
import close from '../images/close.svg'

const Navigation = (props) => {
  const {
    showClose,
    showBack,
    showUser,
    showTotalFunds,
    showServiceFunds,
  } = props

  return (
    <nav className="Navigation">
      <div className="flexbox">
        {
          props.showBack &&
            <Link to="/dashboard" className="flex">
              <img
                src={back}
                alt="Go Back to Dashboard"
                className="Navigation__icon--left"
              />
            </Link>
        }
        {
          props.showUser &&
            <Link to="/user" className="flex">
              <img src={avatar} alt="User Account" className="Navigation__icon--left"/>
            </Link>
        }
        { props.showTotalFunds && <TotalFundAvailable /> }
        { props.showServiceFunds && <ServiceFundsAvailable /> }
        {
          props.showClose &&
            <div className="Navigation__special-header">
              <div className="flex"></div>
              <div className="flex Navigation__center-text">{props.centerText}</div>
              <div className="flex">
                <img src={close} alt="Go Back to Department"
                  className="Navigation__icon--right"
                  onClick={props.history.goBack}>
                </img>
              </div>
            </div>
        }
      </div>
    </nav>
  )
}

export default Navigation
