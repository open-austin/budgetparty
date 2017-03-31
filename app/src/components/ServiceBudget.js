import React from 'react'

import partyLevels from '../config/partyLevels.js'

const ServiceBudget = (props) => {
  let service = partyLevels[props.match.params.id]
  console.log(service)

  return (
    <div className="ServiceBudget">
      <span>hi</span>
    </div>
  )
}

export default ServiceBudget
