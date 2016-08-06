import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class NavBottom extends Component {
  render() {
    return (
      <div className={styles.navBottom}>
        <Link to="/" className={styles.navItem}>
          <img className={styles.navIcon} src="../../src/images/icons/home.png" alt=""/>
          <span className={styles.navText}>Home</span>
        </Link>
        <Link to="/taxes" className={styles.navItem}>
          <img className={styles.navIcon} src="../../src/images/icons/fund.png" alt=""/>
          <span className={styles.navText}>Fund</span>
        </Link>
        <Link to="/services" className={styles.navItem}>
          <img className={styles.navIcon} src="../../src/images/icons/services.png" alt=""/>
          <span className={styles.navText}>Services</span>
        </Link>
        <Link to="/" className={styles.navItem}>
          <img className={styles.navIcon} src="../../src/images/icons/report.png" alt=""/>
          <span className={styles.navText}>Report</span>
        </Link>
      </div>
    );
  }
}

export default NavBottom;
