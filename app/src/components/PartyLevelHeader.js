import React from 'react'

import partyLevels from '../config/partyLevels.js'

const renderOverlay = (service) => {
  let sign = service.percentChange > 0 ? '+' : '-'
  if (service.percentChange === 0) sign = ''
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
  const serviceBudget = formatter.format(service.serviceBudget)

  return (
    <div className="PartyLevelHeader__overlay">
      <span className="PartyLevelHeader__status">You Did It!</span>
      <h2 className="PartyLevelHeader__value">
        {serviceBudget}
      </h2>
      <span className="PartyLevelHeader__change">
        {sign}{service.percentChange}% from Last Year
      </span>
    </div>
  )
}

const PartyLevelHeader = (props) => {
  const { service } = props
  const { totalSections, completeSections } = service
  const isComplete = totalSections - completeSections === 0
  const isInProgress = completeSections > 0
  const isUnstarted = !isComplete && !isInProgress

  const imgCssClass = isComplete ? 'PartyLevelHeader__image--complete' : 'PartyLevelHeader__image'
  let percentChange = "3.2"

  return (
    <div className="PartyLevelHeader">
      { isComplete && renderOverlay(service) }
      <img
        src={`../images/${service.image.split(".")[0]}_full.svg`}
        alt={service.title}
        className={imgCssClass}
      />
    </div>
  )
}

export default PartyLevelHeader
