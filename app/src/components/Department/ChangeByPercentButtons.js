import React from 'react'

const handleClick = (deptId, percentChange) => {
  console.log(`change ${deptId} by ${percentChange}%`)
  console.log(`update Service Budget Spending`)
  console.log(`update Total Budget Funds Remaing`)
}

const ChangeByPercentButtons = (props) => {
  const { deptId } = props

  return (
    <div className="ChangeByPercentButtons__adjustButtons">
      <div
        className="ChangeByPercentButtons__oneMillionRed"
        onClick={handleClick.bind(this, deptId, -1)}
      >
        <p>-1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__hundredThousandRed"
        onClick={handleClick.bind(this, deptId, -.1)}
      >
        <p>-0.1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__hundredThousandGreen"
        onClick={handleClick.bind(this, deptId, .1)}
      >
        <p>+0.1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__oneMillionGreen"
        onClick={handleClick.bind(this, deptId, 1)}
      >
        <p>+1%</p>
      </div>
    </div>
  )
}

export default ChangeByPercentButtons;
