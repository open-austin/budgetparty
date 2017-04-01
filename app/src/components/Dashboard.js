import React, { Component } from 'react'
import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import partyLevels from '../config/partyLevels.js'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed} handleLogout={this.props.handleLogout}/>

        <div className="Dashboard__body">{
          partyLevels.map( (level) => {
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
