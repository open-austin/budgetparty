import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';

import styles from '../styles.scss';

let dollarAmout = "$911 Million"

class Taxes extends Component {
  render() {
    return (
      <div>
        <DollarCount data={this.props.data}/>
        <div className={styles.contentBody}>
          <div className={styles.pageTitle}>
            <h1>
              You have<br/>
              <span className={styles.cashMoney}>{dollarAmout}</span><br/>
              to play with.
            </h1>
            <small>*The General Fund for 2016-17</small><br/>
            <Link className={`${styles.button} btn btn-lg btn-success`} role="button" to="/services">Continue</Link>
          </div>



          <div className={styles.pageBody}>
            <h4>Where the Money comes from...</h4>
            <p>Where does the City of Austin get the money to run its programs and pay the X,XXX civil servants it employs? </p>
            <p>The General Fund includes money the City has gathered via:
              <ul>
                <li>Taxes on Property</li>
                <li>Money generating enterprises like Energy, Waste Management, Airport Services, etc</li>
                <li>Fees on Serivces</li>
                <li>Sales taxes</li>
              </ul>
            </p>
            <p>The General Fund varies from year to year because of outside effects like population change and overall economic activiy. It is also effected when City Council votes to change tax and service rates. It is politically unpopular for Councilmembers to increase taxes in any way.</p>
          </div>
        </div>
        <NavBottom props={this.props}/>
      </div>
    );
  }
}

export default Taxes;
