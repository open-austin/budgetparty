import React, { Component } from 'react'
import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import levels from '../data/levels.js'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed} handleLogout={this.props.handleLogout}/>

        <div className="Dashboard__body">{
          levels.map( (level) => {
            return (
              <Link to={`/service/${level.index}`} key={level.index}>
                <PartyLevel {...level} />
              </Link>
            )
          })
        }</div>

      </div>
    )
  }
}
