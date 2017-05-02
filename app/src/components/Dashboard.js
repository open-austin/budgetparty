import React, { Component } from 'react'
import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render () {
    const { services } = this.props;

    const getServiceLink = (level) => {
      // The Welcome Level should go back to the Intro pages...
      if (level.index === 0) return '/intro/1';
      // The Budget Submission will also have a special link...
      else if (level.index + 1 >= services.length) return '/submit';
      // Otherwise, continue at will for the other service buckets.
      else return `/service/${level.index}`;
    };

    const isLinkClickAllowed = (level) => {
      return level.status && level.status !== "locked";
    }

    return (
      <div>
        <Navigation showUser showTotalFunds />

        <div className="Dashboard__body">
          {services.map(level => {
            return isLinkClickAllowed(level)
              ?
                <Link to={getServiceLink(level)} key={level.index}>
                  <PartyLevel {...level} />
                </Link>
              :
                <PartyLevel {...level} key={level.index} />
          })}
        </div>

      </div>
    )
  }
}
