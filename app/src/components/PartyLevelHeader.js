import React from 'react'
import accounting from 'accounting'

const getSign = (number) => {
  if (number.percentChange > 0) {
    return '+'
  } else if (number.percentChange < 0) {
    return '-'
  } else {
    return ''
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const getPercentChange = department => {
  // TODO: The percentChange is imprecise. Blah... math
  // Maybe this is the next thing to try?
  // https://github.com/MikeMcl/decimal.js/ or https://github.com/MikeMcl/big.js
  const amountChange = accounting.toFixed(((department.amount - department.lastYearAmount) / department.lastYearAmount), 3)
  return accounting.toFixed(amountChange * 100, 1)
}

const getServicePercentChange = service => {
  return service.amount || 5
}

const PartyLevelHeader = (props) => {
  const { service, department } = props

  let isServiceComplete = department ? false : service.status === "complete"

  const isInProgress = department && department.amount !== null
  const imgCssClass = isServiceComplete ? 'PartyLevelHeader__image--complete' : 'PartyLevelHeader__image'

  const handleReset = (deptId) => {
    props.resetBudgetAmount(deptId)
  }

  const renderFinishedOverlay = (service) => {
    const serviceBudget = formatter.format(service.serviceBudget)
    const sign = getSign(service)

    return (
      <div className="PartyLevelHeader__overlay--green">
        <span className="PartyLevelHeader__status">
          You Did It!
        </span>
        <h2 className="PartyLevelHeader__value">
          {serviceBudget}
        </h2>
        <span className="PartyLevelHeader__change">
          {sign} {getServicePercentChange(service)}% from Last Year
        </span>
      </div>
    )
  }

  const renderInProgressOverlay = (service, department) => {
    const departmentBudget = formatter.format(department.amount)
    const sign = getSign(department)

    return (
      <div className="PartyLevelHeader__overlay--grey">
        <span className="PartyLevelHeader__change">
          {sign} {getPercentChange(department)}% from Last Year
        </span>
        <h2 className="PartyLevelHeader__value">
          {departmentBudget}
        </h2>
        <span className="PartyLevelHeader__reset" onClick={handleReset.bind(this, department.deptId)}>
          Reset
        </span>
      </div>
    )
  }

  return (
    <div className="PartyLevelHeader">
      { isServiceComplete && renderFinishedOverlay(service, department) }
      { isInProgress && renderInProgressOverlay(service, department) }
      <img
        src={`/images/${service.image.split(".")[0]}_full.svg`}
        alt={service.title}
        className={imgCssClass}
      />
    </div>
  )
}

export default PartyLevelHeader
