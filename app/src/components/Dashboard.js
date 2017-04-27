import React, { Component } from 'react'
import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render () {
    const { levels } = this.props;

    return (
      <div>
        <Navigation />

        <div className="Dashboard__body">
          { levels.map(level => {
            if (level.status || level.status !== "locked") {
              return (
                <Link to={`/service/${level.index}`} key={level.index}>
                  <PartyLevel {...level} />
                </Link>
              )
            } else {
              return <PartyLevel {...level} key={level.index} />
            }
          }) }
        </div>

      </div>
    )
  }
}
