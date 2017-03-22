import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
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
            <li>
              {this.props.isAuthed
                ? <button
                    style={{border: 'none', background: 'transparent'}}
                    onClick={this.props.handleLogout}
                    className="navbar-brand">Logout</button>
                : <span>
                    <Link to="/login" className="navbar-brand">Login</Link>
                  </span>}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
