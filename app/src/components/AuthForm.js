import React, { Component } from 'react'
import { auth, login, resetPassword } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    errorText: error.message
  }
}

function setLoginErrorMsg(error) {
  return {
    errorText: error
  }
}

export default class AuthForm extends Component {
  state = {
    errorText: null,
  }

  handleRegister = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }

  handleLogin = (e) => {
    e.preventDefault();
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setLoginErrorMsg('Invalid username/password.'))
        })
  }

  render () {
    const isSigningUp = this.props.action === "signup";
    const buttonText = isSigningUp ? "Create Account" : "Sign in";
    const handleSubmit = isSigningUp ? this.handleRegister : this.handleLogin;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="auth-form__label">Email</label>
          <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
        </div>
        <div className="form-group">
          <label className="auth-form__label">Password</label>
          <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
        </div>
        {
          this.state.errorText &&
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span>
            &nbsp;{this.state.errorText}
          </div>
        }
        <button type="submit" className="auth-form__button btn btn-primary">{buttonText}</button>
      </form>
    )
  }
}
