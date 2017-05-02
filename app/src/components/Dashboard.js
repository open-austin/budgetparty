import React, { Component } from 'react'
import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render () {
    const { services } = this.props;

    const getServiceLink = (service) => {
      // The Welcome Level should go back to the Intro pages...
      if (service.index === 0) return '/intro/1';
      // The Budget Submission will also have a special link...
      else if (service.index + 1 >= services.length) return '/submit';
      // Otherwise, continue at will for the other service buckets.
      else return `/service/${service.index}`;
    };

    const isLinkClickAllowed = (service) => {
      return service.status && service.status !== "locked";
    }

    return (
      <div>
        <Navigation showUser showTotalFunds />

        <div className="Dashboard__body">
          {services.map(service => {
            if (service.index === 1) debugger
            return isLinkClickAllowed(service)
              ?
                <Link to={getServiceLink(service)} key={service.index}>
                  <PartyLevel {...service} />
                </Link>
              :
                <PartyLevel {...service} key={service.index} />
          })}
        </div>

      </div>
    )
  }
}
