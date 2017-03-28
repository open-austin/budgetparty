import React, { Component } from 'react'
import User from './User'
import TotalFundAvailable from './TotalFundAvailable'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar.svg'

export default class Navigation extends Component {
  render () {
    return (
      <nav className="Navigation navbar navbar-default navbar-static-top">
        <div className="container flexbox">
          <Link to="/user" className="flex">
            <img src={avatar} alt="User Account" className="Navigation__user-icon"/>
          </Link>
          <TotalFundAvailable />
        </div>
      </nav>
    )
  }
}
