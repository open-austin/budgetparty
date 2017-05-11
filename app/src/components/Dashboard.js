import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import PartyLevel from './PartyLevel'

export default class Dashboard extends Component {
  render () {
    const { services, funds } = this.props;
    console.log('funds', funds)

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
        <Navigation showUser showTotalFunds funds={funds} />

        <div className="Dashboard__body">
          {services.map(service => {
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

Dashboard.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
  funds: PropTypes.shape({
    generalFund: PropTypes.number,
    servicesSum: PropTypes.number,
    generalFund2016: PropTypes.number,
  }),
};