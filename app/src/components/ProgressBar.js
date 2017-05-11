import React from 'react'
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { x, y } = props
  const percent = `${x / y * 100}%`

  return (
    <div>
      <div className="ProgressBar">
        <span className="ProgressBar__complete"
          style={{ width: percent }}></span>
      </div>
      <span className="ProgressBar__text">
        {`${x} / ${y}`}
      </span>
    </div>
  )
}

export default ProgressBar

ProgressBar.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};