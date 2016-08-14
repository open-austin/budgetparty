import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';
import YourBudgetCard from 'components/YourBudgetCard';
import UnusedFundsCard from 'components/UnusedFundsCard';
import ServicesSummaryCard from 'components/ServicesSummaryCard';
import SaveAndSubmitCard from 'components/SaveAndSubmitCard';

import styles from '../styles.scss';

class Report extends Component {
  getIncreaseOrDecrease(generalFund2016, servicesSum) {
    return generalFund2016 > servicesSum ? 'decreased' : 'increased';
  }

  getDifference(generalFund2016, servicesSum) {
    return Math.abs(servicesSum - generalFund2016);
  }

  getPercentChange(generalFund2016, servicesSum) {
    return Math.abs(this.getDifference(generalFund2016, servicesSum) / generalFund2016);
  }

  shouldDisplayUnusedFunds(generalFund2016, servicesSum) {
    return ((generalFund2016 - servicesSum) > 0) ? true : false;
  }

  render() {
    const { generalFund2016, servicesSum } = this.props.data;

    return (
      <div>
        <DollarCount data={this.props.data} />

        <div className={styles.contentBody}>
          <div>
            <h1>Report</h1>
          </div>

          <YourBudgetCard
            data={this.props.data}
            getIncreaseOrDecrease={this.getIncreaseOrDecrease}
            getDifference={this.getDifference}
            getPercentChange={this.getPercentChange}
          />
          {
            this.shouldDisplayUnusedFunds(generalFund2016, servicesSum) &&
            <UnusedFundsCard
              data={this.props.data}
              getDifference={this.getDifference}
            />
          }
          <ServicesSummaryCard />
          <SaveAndSubmitCard />

        </div>

        <NavBottom />
      </div>
    );
  }
}

export default Report;
