import React from 'react'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'
import levels from '../data/levels.js'

const ServiceBudget = (props) => {
  const { service_id, id } = props.match.params
  const service = levels[service_id]
  const department = service.departments[id - 1]

  return (
    <div>
      <Navigation {...props}
        service={service}
        isAuthed={props.isAuthed}
        handleLogout={props.handleLogout}
      />

      <div className="ServiceBudget">
        <PartyLevelHeader {...props}
          service={service}
          department={department}
        />

        <div className="Service__body">
          <h1 className="Service__title">{department.name}</h1>
          <p className="Service__desc">{department.desc}</p>
        </div>

        {/* <Link to="learn-more/props..params.service_id"></Link> */}

      </div>
    </div>
  )
}

export default ServiceBudget
