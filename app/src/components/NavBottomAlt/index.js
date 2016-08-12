import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class NavBottomAlt extends Component {
  render() {
    return (
      <div className={styles.navBottom}>
        <Link to="/services" className={styles.navItemLeft}>
          <span className={styles.navText}>Back to Services</span>
        </Link>
        <Link to="/services" className={styles.navItemRight}>
          <span className={styles.navText}>X Close</span>
        </Link>
      </div>
    );
  }
}

export default NavBottomAlt;
