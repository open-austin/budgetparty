import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const User = ({ ...props }) => {
  const { isAuthed, user, handleLogout } = props
  return (
    <div>
      {isAuthed
      ?
        <div>
          <h2>Logged in as {user.displayName || user.email}</h2>
          <button
            style={{border: 'none', background: 'transparent'}}
            onClick={handleLogout}
            className="navbar-brand"
          >
              Logout
            </button>
          <Link to="/dashboard">
            <button
              style={{ display: 'block', marginTop: 100 }}
            >
              Go Back
            </button>
          </Link>
        </div>
        : <span>
          <Link to="/login" className="navbar-brand">Login</Link>
        </span>
        }
    </div>
  )
}

export default User

User.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object,
};
