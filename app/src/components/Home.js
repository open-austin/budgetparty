import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tabs from './Tabs'
import AuthForm from './AuthForm'
import GoogleAuth from './GoogleAuth'
import logo from '../images/logo.png'

export default class Home extends Component {
  state = {
    activeTab: 0,
  }

  changeTab = (tab) => {
    this.setState({
      activeTab: tab.id
    });
  }

  tabList = [
    { id: 0, 'text': 'Sign Up' },
    { id: 1, 'text': 'Log in' },
  ]

  render () {
    return (
      <div>
        <div className="text-center">
          <img src={logo} alt="Budget Party" className="logo"/>
        </div>
        <div className="auth-form-wrapper">
          <Tabs
            tabList={this.tabList}
            activeTab={this.state.activeTab}
            changeTab={this.changeTab}
          />
          <div className="auth-form col-sm-6 col-sm-offset-3">
            { this.state.activeTab === 0
              ? <AuthForm action="signup"/>
              : <AuthForm action="login"/>
            }
            <GoogleAuth />
          </div>

        </div>
        <Link to="/intro/1" className="auth-form__skip">Skip Login</Link>
      </div>
    )
  }
}
