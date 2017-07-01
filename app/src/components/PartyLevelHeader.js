import React from 'react'
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl'
import { constants } from '../config/constants'

const getSign = (number) => {
  let sign = ''

  if (number.percentChange > 0) {
    sign = '+'
  } else if (number.percentChange < 0) {
    sign = '-'
  }

  return sign
}

const PartyLevelHeader = (props) => {
  const { service, department } = props

  const isServiceComplete = department ? false : service.status === 'complete'
  const isUnstarted = department && department.amount === null
  const isInProgress = department && department.amount !== null
  const imgCssClass = isServiceComplete ? 'PartyLevelHeader__image--complete' : 'PartyLevelHeader__image'

  const handleReset = (deptId) => {
    props.resetBudgetAmount(deptId)
  }

  const renderFinishedOverlay = (serv) => {
    const sign = getSign(serv)

    return (
      <div className="PartyLevelHeader__overlay--green">
        <span className="PartyLevelHeader__status">
          You Did It!
        </span>
        <h2 className="PartyLevelHeader__value">
          <FormattedNumber
            value={service.amount}
            style="currency" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </h2>
        <span className="PartyLevelHeader__change">
          {sign} {Math.abs(service.percentChange)}% from Last Year
        </span>
      </div>
    )
  }

  const renderInProgressOverlay = (dept) => {
    const sign = getSign(dept)

    return (
      <div className="PartyLevelHeader__overlay--grey">
        <span className="PartyLevelHeader__change">
          {sign} {Math.abs(dept.percentChange)}% from Last Year
        </span>
        <h2 className="PartyLevelHeader__value">
          <FormattedNumber
            value={dept.amount}
            style="currency"  //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </h2>
        <span className="PartyLevelHeader__reset" onClick={handleReset.bind(this, dept.deptId)}>
          Reset
        </span>
      </div>
    )
  }

  const renderStartingOverlay = (dept) => {
    return (
      <div className="PartyLevelHeader__overlay--grey">
        <span className="PartyLevelHeader__change">
          Department Spending from {constants.LAST_YEAR}
        </span>
        <h2 className="PartyLevelHeader__value">
          <FormattedNumber
            value={dept.lastYearAmount}
            style="currency"  //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </h2>
      </div>
    )
  }

  return (
    <div className="PartyLevelHeader">
      { isServiceComplete && renderFinishedOverlay(service, department) }
      { isInProgress && renderInProgressOverlay(department) }
      { isUnstarted && renderStartingOverlay(department) }
      <img
        src={`/images/${service.image.split('.')[0]}_full.svg`}
        alt={service.title}
        className={imgCssClass}
      />
    </div>
  )
}

export default PartyLevelHeader

PartyLevelHeader.propTypes = {
  service: PropTypes.shape({
    completeSections: PropTypes.number,
    departments: PropTypes.arrayOf(
      PropTypes.number,
    ),
    desc: PropTypes.string,
    image: PropTypes.string,
    index: PropTypes.number,
    percentChange: PropTypes.number,
    status: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  department: PropTypes.shape({
    amount: PropTypes.number,
    amount2015: PropTypes.number,
    deptId: PropTypes.number,
    description: PropTypes.string,
    explainYourSpending: PropTypes.string,
    lastYearAmount: PropTypes.number,
    learnMore: PropTypes.string,
    name: PropTypes.string,
    percentChange: PropTypes.number,
    url: PropTypes.string,
  }),
  resetBudgetAmount: PropTypes.func,
};
