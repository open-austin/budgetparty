import React from 'react'
import PropTypes from 'prop-types';
import check from '../images/check.svg'
import pencil from '../images/pencil.svg'
import lock from '../images/lock.svg'

const PartyLevel = (props) => {
  const {
    status,
    percentChange,
    departments,
    title,
    image,
    index,
    completeSections,
  } = props

  const isComplete = status === "complete"
  const isInProgress = status === "ready" || status === "in_progress"
  const isLocked = !status || status === "locked" || status === null
  const incrOrDecr = percentChange > 0 ? 'Increased' : 'Decreased'

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
    let changeText

    if (percentChange === 0) {
      changeText = '0% Change in Funding'
    } else {
      changeText = `${incrOrDecr} Funding ${percentChange}%`
    }

    if (isComplete){
      if (index === 0) return // Don't show anything for Welcome
      return changeText
    } else if (isInProgress) {
      return `${completeSections || 0}/${departments.length} Complete`
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

PartyLevel.propTypes = {
  status: PropTypes.string,
  percentChange: PropTypes.number,
  departments: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number,
  completeSections: PropTypes.number,
};
