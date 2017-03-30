import React from 'react'
import check from '../images/check.svg'
import pencil from '../images/pencil.svg'
import lock from '../images/lock.svg'

const PartyLevel = (props) => {

  const {totalSections, completeSections } = props
  const isComplete = totalSections - completeSections === 0
  const isInProgress = completeSections > 0
  const isUnstarted = !isComplete && !isInProgress
  const partyLevelCssClass = isComplete ? 'PartyLevel--complete' : 'PartyLevel'
  const imgCssClass = isUnstarted ? 'PartyLevel__image--unstarted' : 'PartyLevel__image'
  let percentChange = "3.2"

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
      return `${completeSections}/${totalSections} Complete`
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
      <img src={`../images/${props.image}`}
        alt={props.title}
        className={imgCssClass}
      />
      <div className="PartyLevel__details">
        <img src={statusIcon()} alt={props.title} className="PartyLevel__status"/>
        <h2 className={titleCssClass()}>{props.title}</h2>
        <span className="PartyLevel__progress">{progressMessage(props.index)}</span>
      </div>
    </div>
  )
}

export default PartyLevel
