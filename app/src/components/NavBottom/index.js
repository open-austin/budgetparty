import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class NavBottom extends Component {
  render() {
    return (
      <div className={styles.navBottom}>
        <Link to="/" className={styles.navItem}>Home</Link>
        <Link to="/taxes" className={styles.navItem}>Taxes</Link>
        <Link to="/services" className={styles.navItem}>Services</Link>
        <Link to="/" className={styles.navItem}>Report</Link>
      </div>
    );
  }
}

export default NavBottom;
