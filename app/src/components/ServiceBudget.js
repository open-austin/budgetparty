import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

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
