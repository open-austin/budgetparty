import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class Welcome extends Component {
  render() {
    return (
      <div className={`${styles.margin} container`}>
        <h1 className={styles.header}>Build a Budget</h1>
        <p className={`${styles.text} lead`}>Build a Budget helps citizens understand and influence the city budget</p>
        <Link className={`${styles.button} btn btn-lg btn-success`} role="button" to="/taxes">Start</Link>
        <Link to="/about"><p>Learn more about this project.</p></Link>
      </div>
    );
  }
}

export default Welcome;
