import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';
import YourBudgetCard from 'components/YourBudgetCard';
import UnusedFundsCard from 'components/UnusedFundsCard';
import ServicesSummaryCard from 'components/ServicesSummaryCard';
import SaveAndSubmitCard from 'components/SaveAndSubmitCard';

import styles from '../styles.scss';

class Report extends Component {
  render() {
    return (
      <div>
        <DollarCount data={this.props.data} />

        <div className={styles.contentBody}>
          <div>
            <h1>Report</h1>
            <p>persequeris. Omnis molestie ex est, te quo tale suas Complete the below sections. ale suas Complete the below.</p>
          </div>

          <YourBudgetCard />
          <UnusedFundsCard />
          <ServicesSummaryCard />
          <SaveAndSubmitCard />

        </div>

        <NavBottom />
      </div>
    );
  }
}

export default Report;
