import React, { Component } from 'react'
import Navigation from './Navigation'
import { Route, Link } from 'react-router-dom'
import moneyImg from '../images/money.svg'

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
