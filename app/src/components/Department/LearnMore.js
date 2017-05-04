import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from '../Navigation'
import departments from '../../data/departments.js'

const LearnMore = (props) => {
  const serviceId = props.match.params.service_id
  const departmentId = props.match.params.id
  const department = departments[Number(departmentId) - 1]

  return (
    <div style={{height: '100%'}}>
      <Navigation {...props} showClose="true" centerText="Learn More" />

      <div className="LearnMore">
        <div className="LearnMore__body">
          <h1 className="LearnMore__title">{department.name}</h1>
          <p className="LearnMore__desc">{department.learnMore}</p>
        </div>
        <Link to={`/service/${serviceId}/department/${departmentId}`}
          className="LearnMore__close-button"
        >
          Close
        </Link>

      </div>
    </div>
  )
}

export default LearnMore
