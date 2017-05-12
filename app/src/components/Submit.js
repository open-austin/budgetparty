import React from 'react'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'
import ProgressBar from './ProgressBar'

const Submit = (props) => {
  const { services, departments, funds } = props;

  return (
    <div>
      <Navigation funds={funds} showBack showTotalFunds showServiceFunds />

      <div className="Submit">
        <PartyLevelHeader {...props} showServiceFunds={false} />

        <div className="Submit__body">
          <h1 className="Submit__title">hi</h1>
          <p className="Submit__desc">
            hey
          </p>
        </div>

      </div>
    </div>
  )
}

export default Submit
