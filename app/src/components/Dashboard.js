import React, { Component } from 'react'
import Navigation from './Navigation'
import { Route, Link } from 'react-router-dom'
import moneyImg from '../images/money.svg'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed} handleLogout={this.props.handleLogout}/>
        <h1>dashboard</h1>
      </div>
    )
  }
}
