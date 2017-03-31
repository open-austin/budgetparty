import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'
import partyLevels from '../config/partyLevels.js'

export default class Service extends Component {
  render () {
    let service = partyLevels[this.props.match.params.id]

    return (
      <div>
        <Navigation {...this.props}
          service={service}
          isAuthed={this.props.isAuthed}
          handleLogout={this.props.handleLogout}
        />

        <div className="Service">

          <PartyLevelHeader {...this.props} />
          <div className="Service__body">
            <h1 className="Service__title">{service.title}</h1>
            <p className="Service__desc">{service.desc}</p>
          </div>

          <Link
            to={`/service/${service.index}/budget/1`}
            className="Service__next-button"
          >
            {(service.index + 1) < partyLevels.length ? 'Start Budgeting' : 'Review Final Budget'}
          </Link>

        </div>

      </div>
    )
  }
}
