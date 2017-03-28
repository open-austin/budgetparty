import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

import homeImage from 'images/icons/bottom-nav/home.svg';
import revenueImage from 'images/icons/bottom-nav/revenue.svg';
import servicesImage from 'images/icons/bottom-nav/services.svg';
import reportImage from 'images/icons/bottom-nav/report.svg';

class NavBottom extends Component {
  render() {
    return (
      <div className={styles.navBottom}>
        <Link to="/" className={styles.navItem}>
          <img className={styles.navIcon} src={homeImage} alt=""/>
          <span className={styles.navText}>Home</span>
        </Link>
        <Link to="/fund" className={styles.navItem}>
          <img className={styles.navIcon} src={revenueImage} alt=""/>
          <span className={styles.navText}>Fund</span>
        </Link>
        <Link to="/services" className={styles.navItem}>
          <img className={styles.navIcon} src={servicesImage} alt=""/>
          <span className={styles.navText}>Services</span>
        </Link>
        <Link to="/report" className={styles.navItem}>
          <img className={styles.navIcon} src={reportImage} alt=""/>
          <span className={styles.navText}>Report</span>
        </Link>
      </div>
    );
  }
}

export default NavBottom;
