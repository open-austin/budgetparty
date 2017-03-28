import React, { Component } from 'react'
import User from './User'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar.svg'

export default class Navigation extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <Link to="/user">
            <img src={avatar} alt="User Account"/>
          </Link>
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">React Router + Firebase Auth</Link>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <Link to="/" className="navbar-brand">Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
