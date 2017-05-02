import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'underscore'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'

export default class Service extends Component {
  render () {
    let service = levels[this.props.match.params.id]

    const departmentAmounts = service.departments.map(dept => {
      return this.props.departments[dept - 1].amount
    });

    const isIncomplete = _.contains(departmentAmounts, null)
    const { services } = this.props
    const service = services[this.props.match.params.id]

    return (
      <div>
        <Navigation service={service} showBack showTotalFunds showServiceFunds />

        <div className="Service">

          <PartyLevelHeader {...this.props} service={service} />

          <div className="Service__body">
            <h1 className="Service__title">{service.title}</h1>
            <p className="Service__desc">{service.desc}</p>
          </div>

          {
            isIncomplete
              ?
              <Link to={`/service/${service.index}/department/${service.departments[0]}`}
                className="Service__next-button"
              >
                {(service.index + 1) < services.length ? 'Start Budgeting' : 'Review Final Budget'}
              </Link>
              :
              <div className="Service__review-buttons">
                <Link to={`/service/${service.index}/department/${service.departments[0]}`}
                  className="Service__edit-button">
                  Revise
                </Link>
                <Link to="/dashboard"
                  className="Service__done-button">
                  Done
                </Link>
              </div>
          }

        </div>

      </div>
    )
  }
}
