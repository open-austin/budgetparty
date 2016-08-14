import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';
import YourBudgetCard from 'components/YourBudgetCard';
import UnusedFundsCard from 'components/UnusedFundsCard';
import ServicesSummaryCard from 'components/ServicesSummaryCard';
import SaveAndSubmitCard from 'components/SaveAndSubmitCard';

import styles from '../styles.scss';

class Report extends Component {
  getIncreaseOrDecrease(generalFund2016, servicesSum, pastTense = false) {
    const text = generalFund2016 > servicesSum ? 'decrease' : 'increase';

    if (pastTense) return `${text}d`;
    return text;
  }

  getDifference(generalFund2016, servicesSum) {
    return Math.abs(servicesSum - generalFund2016);
  }

  getPercentChange(oldNumber, newNumber) {
    return Math.abs(this.getDifference(oldNumber, newNumber) / oldNumber);
  }

  shouldDisplayUnusedFunds(generalFund2016, servicesSum) {
    return ((generalFund2016 - servicesSum) > 0) ? true : false;
  }

  getBiggestChangeList(departments) {
    const list = [];
    let sortedList = [];

    departments.map((dept) => {
      const change = this.getPercentChange(dept.lastYearAmount, dept.amount);
      const deptObj = { name: dept.name, change };
      list.push(deptObj);
    });

    sortedList = _.sortBy(list, 'change').reverse();

    return sortedList;
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
          <ServicesSummaryCard
            data={this.props.data}
            getIncreaseOrDecrease={this.getIncreaseOrDecrease}
            getPercentChange={this.getPercentChange}
            getBiggestChangeList={this.getBiggestChangeList}
            getDifference={this.getDifference}
          />
          <SaveAndSubmitCard />

        </div>

        <NavBottom />
      </div>
    );
  }
}

export default Report;
