import React from 'react'

const ChangeByPercentButtons = (props) => {
  const { deptId, departments } = props

  const handlePercentChange = (deptId, departments, percentChange) => {
    props.onPercentChange(departments[deptId - 1], percentChange)
  }

  return (
    <div className="ChangeByPercentButtons__adjustButtons">
      <div
        className="ChangeByPercentButtons__oneMillionRed"
        onClick={handlePercentChange.bind(this, deptId, departments, -1)}
      >
        <p>-1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__hundredThousandRed"
        onClick={handlePercentChange.bind(this, deptId, departments, -.1)}
      >
        <p>-0.1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__hundredThousandGreen"
        onClick={handlePercentChange.bind(this, deptId, departments, .1)}
      >
        <p>+0.1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__oneMillionGreen"
        onClick={handlePercentChange.bind(this, deptId, departments, 1)}
      >
        <p>+1%</p>
      </div>
    </div>
  )
}

export default ChangeByPercentButtons;
