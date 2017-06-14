import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import back from '../images/back.svg'

const User = ({ ...props }) => {
  const { isAuthed, user, handleLogout } = props
  return (
    <div className="User">
      {isAuthed
      ?
        <div>
          <h2
            className="User__title"
          >
            Logged in as {(user && user.displayName) || (user && user.email)}
          </h2>
          <button
            onClick={handleLogout}
            className="User__logout-button"
          >
              Logout
            </button>
          <Link to="/dashboard">
            <img
              src={back}
              alt="Go back button."
              className="User__back-button"
            />
          </Link>
        </div>
        :
        <div>
          <h2>You are not logged in. Click on the button below to log in.</h2>
          <span>
            <Link
              to="/login"
              className="User__login-button">
              <button>
                Login
              </button>
            </Link>
          </span>
        </div>
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
