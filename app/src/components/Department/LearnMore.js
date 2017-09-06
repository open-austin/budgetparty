import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import Navigation from '../Navigation'
import departments from '../../data/departments.js'

const LearnMore = (props) => {
  const serviceId = props.match.params.service_id
  const departmentId = props.match.params.id
  const department = departments[Number(departmentId) - 1]

  return (
    <div style={{height: '100%'}}>
      <Navigation {...props} showClose centerText="Learn More" />

      <div className="LearnMore">
        <div className="LearnMore__body">
          <h1 className="LearnMore__title">{department.name}</h1>
          <p className="LearnMore__desc">{department.learnMore}</p>
          { department.learnMoreUrl &&
            <a href={department.learnMoreUrl} target="_blank" className="LearnMore__desc">
              Visit Open Budget to see the numbers.
            </a>
          }
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

LearnMore.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
      service_id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};
