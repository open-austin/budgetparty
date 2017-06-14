import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'underscore'
import PropTypes from 'prop-types';

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'

const Service = props => {
  const handleReturnToDashboard = (service, e) => {
    props.onReturnToDashboard(service)
  }

  const { services, funds } = props
  const service = services[props.match.params.id]
  const isIncomplete = service.status !== "complete"

  return (
    <div>
      <Navigation service={service} funds={funds} showBack showTotalFunds showServiceFunds />

      <div className="Service">

        <PartyLevelHeader {...props} service={service} />

        <div className="Service__body">
          <h1 className="Service__title">{service.title}</h1>
          <p className="Service__desc">{service.desc}</p>
        </div>

        {
          isIncomplete
            ?
            <div className="Service__next-button-flex-container">
              <Link to={`/service/${service.index}/department/${service.departments[0]}`}
                className="Service__next-button"
              >
                {(service.index + 1) < services.length ? 'Start Budgeting' : 'Review Final Budget'}
              </Link>
            </div>
            :
            <div className="Service__review-buttons">
              <Link to={`/service/${service.index}/department/${service.departments[0]}`}
                className="Service__edit-button">
                Revise
              </Link>
              <Link to="/dashboard" onClick={handleReturnToDashboard.bind(this, service)}
                className="Service__done-button">
                Done
              </Link>
            </div>
        }

      </div>

    </div>
  )
}

export default Service

Service.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      index: PropTypes.number,
      status: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  onReturnToDashboard: PropTypes.func.isRequired,
  funds: PropTypes.shape({
    generalFund: PropTypes.number,
    generalFund2016: PropTypes.number,
    servicesSum: PropTypes.number,
  }),
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};
