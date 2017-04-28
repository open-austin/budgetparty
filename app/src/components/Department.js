import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'

const Department = (props) => {
  const { levels, departments } = props;
  const { service_id, id } = props.match.params;
  const service = levels[Number(service_id)];
  const department = departments[Number(id) - 1];

  return (
    <div>
      <Navigation service={service} showBack showTotalFunds showServiceFunds />

      <div className="Department">
        <PartyLevelHeader {...props}
          service={service}
          department={department}
        />

        <div className="Department__body">
          <h1 className="Department__title">{department.name}</h1>
          <p className="Department__desc">{department.description}</p>
        </div>

        <Link to={`/service/${service_id}/department/${id}/learn-more`}>
          Learn More
        </Link>

      </div>
    </div>
  )
}

export default Department
