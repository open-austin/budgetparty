import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tabs from './Tabs'
import AuthForm from './AuthForm'
import GoogleAuth from './GoogleAuth'
import logo from '../images/budget_party_logo.svg'

import { login, anonymous_auth } from '../helpers/auth'
// import { auth, login, anonymous_auth } from '../helpers/auth'

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

export default class Home extends Component {

  state = {
    activeTab: 0,
    errorText: null,
  }

  changeTab = (tab) => {
    this.setState({
      activeTab: tab.id,
    });
  }

  skipLogin = (e) => {
    anonymous_auth()
      .catch((error) => {
        this.setState(setLoginErrorMsg('Skip login is not supported as of now.'))
      })
  }

  handleRegister = (email, pwd) => {
    // auth(email, pwd)
    //   .catch(e => this.setState(setErrorMsg(e)))
  }

  handleLogin = (email, pwd) => {
    login(email, pwd)
      .catch((error) => {
          this.setState(setLoginErrorMsg('Invalid username/password.'))
        })
  }

  getAuthForm = () => {
    return this.state.activeTab === 0
            ? <AuthForm actionHandler={this.handleRegister}
                buttonText={"Create Account"}
                errorText={this.state.errorText} />
            : <AuthForm actionHandler={this.handleLogin}
                buttonText={"Sign in"}
                errorText={this.state.errorText} />
  }

  tabList = [
    { id: 0, text: 'Sign Up' },
    { id: 1, text: 'Log in' },
  ]

  render () {
    return (
      <div className="home">
        <div className="center-text">
          <img src={logo} alt="Budget Party" className="logo"/>
        </div>
        <div className="auth-form-wrapper">
          <Tabs
            tabList={this.tabList}
            activeTab={this.state.activeTab}
            changeTab={this.changeTab}
          />
          <div className="auth-form col-sm-6 col-sm-offset-3">
            { this.getAuthForm() }
            <GoogleAuth />
          </div>

        </div>
        <Link onClick={this.skipLogin} to="/intro/1" className="auth-form__skip">Skip Login</Link>
      </div>
    )
  }
}
