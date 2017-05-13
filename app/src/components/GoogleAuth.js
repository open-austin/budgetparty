import React, { Component } from 'react'
import firebase from 'firebase'
import { googleAuthProvider } from '../config/constants'
import googleLogo from '../images/auth_service_google.svg'

export default class GoogleAuth extends Component {

  authenticate() {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(() => {
        this.authHandler();
      })
      .catch(() => {
        alert('There was a problem signing in with Google. Please check your credentials and try again.')
      })
  }

  authHandler(err, authData) { //eslint-disable-line
    if (err) {
      console.log('error', err)
      return
    }
    console.log('authData', authData)
  }

  render() {
    return (
      <div className="text-center">
        <p>or</p>
        <button className="btn google-auth-button" onClick={() => { this.authenticate() }} >
          <img src={googleLogo} alt="Google" />
          Login with Google
        </button>
      </div>
    )
  }
}
