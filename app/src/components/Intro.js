import React, { Component } from 'react'
import Navigation from './Navigation'
import Route from 'react-router-dom'

export default class Intro extends Component {
  render () {
    return (
      <div>
        <Navigation isAuthed={this.props.authed} handleLogout={this.props.handleLogout}/>
      </div>
    )
  }
}
