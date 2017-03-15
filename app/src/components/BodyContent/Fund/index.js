import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';

import styles from '../styles.scss';

let dollarAmout = "$969.2 Million"

class Fund extends Component {
  handleClick(percentChange) {
    return () => {
      this.props.changeDepartmentAmount('all', percentChange);
      this.props.updateServiceSpendingAmount();
    };
  }

  render() {
    return (
      <div>
        <DollarCount data={this.props.data} />
        <div className={styles.contentBody}>
          <div className={styles.pageTitle}>
            <h1>
              You have<br />
              <span className={styles.cashMoney}>{dollarAmout}</span><br />
              to fund services
            </h1>
          </div>

          <div className={styles.pageBody}>
            <h4>This money comes from the General Fund for 2016-17</h4>
            <p>The General Fund is where the City of Austin gets money to run programs and employ 13,838 civil servants.</p>

            <p>General Fund money is collected through:</p>
              <ul>
                <li>Taxes on Property</li>
                <li>Money transfers from the city's publicly owned utilities such as Austin energy and water</li>
                <li>Fees on Serivces</li>
                <li>Sales taxes</li>
              </ul>


            <p>The General Fund varies from year to year because of outside effects like population change and overall economic activtiy.</p>

            <p>It is also affected when City Council votes to change tax and service rates.</p>

            <p>It is politically unpopular for the council to increase taxes in any way.</p>

            <p>There is a an %11.76 increase in the amount money in the General Fund over last year. To start the budget process, you can either apply an %11.7 increase to all departments or begin with last year's budget and a surplus of money.</p>
          </div>
          <div>
            <div
              className={`${styles.buttonSolid} btn btn-lg btn-success`}
              onClick={this.handleClick(11.7).bind(this)}
              role="button">
                Apply 11.7% increase to all departments
            </div>
            <div
              className={`${styles.buttonSolid} btn btn-lg btn-success`}
              onClick={this.handleClick(0).bind(this)}
              role="button">
                Apply 0% change to all departments
            </div>
          </div>
          <Link className={`${styles.buttonSolid} btn btn-lg btn-success`} role="button" to="/services">Continue to services</Link>
        </div>
        <NavBottom props={this.props}/>
      </div>
    );
  }
}

export default Fund;
