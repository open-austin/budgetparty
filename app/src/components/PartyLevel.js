import React from 'react'
import check from '../images/check.svg'
import pencil from '../images/pencil.svg'
import lock from '../images/lock.svg'

const PartyLevel = (props) => {
  const {
    status,
    completeSections,
    percentChange,
    departments,
    title,
    image,
    index,
  } = props

  const isComplete = status === "complete"
  const isInProgress = status === "ready"
  const isLocked = !status || !status === "locked"
  const partyLevelCssClass = isComplete ? 'PartyLevel--complete' : 'PartyLevel'
  const imgCssClass = isLocked ? 'PartyLevel__image--unstarted' : 'PartyLevel__image'

  const statusIcon = () => {
    if (isComplete){
      return check
    } else if (isInProgress) {
      return pencil
    } else {
      return lock
    }
  }

  const progressMessage = (index) => {
    if (isComplete){
      if (index === 0) return
      return `Increased Funding ${percentChange}%`
    } else if (isInProgress) {
      return `${completeSections}/${departments.length} Complete`
    }
  }

  const titleCssClass = () => {
    if (isComplete || isInProgress){
      return 'PartyLevel__title'
    } else {
      return 'PartyLevel__title--unstarted'
    }
  }

  return (
    <div className={partyLevelCssClass}>
      <img src={`../images/${image}`}
        alt={title}
        className={imgCssClass}
      />
      <div className="PartyLevel__details">
        <img src={statusIcon()} alt={title} className="PartyLevel__status"/>
        <h2 className={titleCssClass()}>{title}</h2>
        <span className="PartyLevel__progress">{progressMessage(index)}</span>
      </div>
    </div>
  )
}

export default PartyLevel
