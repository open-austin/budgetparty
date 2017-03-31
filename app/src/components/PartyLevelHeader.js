import React from 'react'

import partyLevels from '../config/partyLevels.js'

const PartyLevelHeader = (props) => {
  let service = partyLevels[props.match.params.id]
  console.log(service)

  return (
    <div className="PartyLevelHeader">
      <img src={`../images/${service.image.split(".")[0]}_full.svg`} alt={service.title} />
    </div>
  )
}

export default PartyLevelHeader
