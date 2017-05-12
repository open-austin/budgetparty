import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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

User.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
