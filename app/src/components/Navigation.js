import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TotalFundAvailable from './TotalFundAvailable'
import ServiceFundsAvailable from './ServiceFundsAvailable'

import avatar from '../images/avatar.svg'
import back from '../images/back.svg'

export default class Navigation extends Component {
  render () {
    return (
      <nav className="Navigation">
        <div className="flexbox">
          {
            this.props.service &&
            <div className="Navigation__back">
              <img
                src={back}
                alt="Go Back"
                className="Navigation__user-icon"
                onClick={this.props.history.goBack}
              />
            </div>
          }
          {
            !this.props.service &&
              <Link to="/user" className="flex">
                <img src={avatar} alt="User Account" className="Navigation__user-icon"/>
              </Link>
          }
          <TotalFundAvailable />
          {
            this.props.service &&
              <ServiceFundsAvailable />
          }
        </div>
      </nav>
    )
  }
}
