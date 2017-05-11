import React from 'react'
import PropTypes from 'prop-types';

const ChangeByPercentButtons = (props) => {
  const { deptId, departments, services } = props
  const serviceIndex = props.match.params.service_id

  const handlePercentChange = (deptId, percentChange, departments, serviceIndex, services) => {
    props.onPercentChange(departments[deptId - 1], percentChange, departments, serviceIndex, services)
  }

  return (
    <div className="ChangeByPercentButtons__adjustButtons">
      <div
        className="ChangeByPercentButtons__oneMillionRed"
        onClick={handlePercentChange.bind(this, deptId, -1, departments, serviceIndex, services)}
      >
        <p>-1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__hundredThousandRed"
        onClick={handlePercentChange.bind(this, deptId, -.1, departments, serviceIndex, services)}
      >
        <p>-0.1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__hundredThousandGreen"
        onClick={handlePercentChange.bind(this, deptId, .1, departments, serviceIndex, services)}
      >
        <p>+0.1%</p>
      </div>
      <div
        className="ChangeByPercentButtons__oneMillionGreen"
        onClick={handlePercentChange.bind(this, deptId, 1, departments, serviceIndex, services)}
      >
        <p>+1%</p>
      </div>
    </div>
  )
}

export default ChangeByPercentButtons;

ChangeByPercentButtons.propTypes = {
  deptId: PropTypes.string.isRequired,
  departments: PropTypes.arrayOf(PropTypes.object).isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
      service_id: PropTypes.string,
    }),
  }).isRequired,
  onPercentChange: PropTypes.func.isRequired,
};