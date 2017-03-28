import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
  render () {
    return (
      <div>
        {this.props.isAuthed
          ? <button
              style={{border: 'none', background: 'transparent'}}
              onClick={this.props.handleLogout}
              className="navbar-brand"
            >
              Logout
            </button>
          : <span>
              <Link to="/login" className="navbar-brand">Login</Link>
            </span>
          }
      </div>
    )
  }
}
