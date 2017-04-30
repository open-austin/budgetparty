import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'

import comment from '../images/comment.svg'

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
          <p className="Department__desc">
            {department.description}
          </p>
          <Link to={`/service/${service_id}/department/${id}/learn-more`}
            className="Department__link"
          >
            Learn More
          </Link>


          <Link to={`/service/${service_id}/department/${id}/explain`}
            className="Department__link"
          >
            <img src={comment} alt="Comment bubble icon"/> Explain your spending
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Department
