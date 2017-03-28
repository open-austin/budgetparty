import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';
import homeBackground from 'images/icons/homeBackground.png';

class Welcome extends Component {
  render() {
    return (
      <div className={styles.bgWrapper}>
        <img
          src={homeBackground}
          alt="government building icon"
          className={styles.bgImg}
        />
        <div className={styles.container}>
          <h1 className={styles.header}>Build a Budget</h1>
          <p className={`${styles.text} lead`}>Understand & create a city budget for Austin</p>
          <Link to="/fund"
            className={`${styles.buttonWhiteOutline} btn btn-lg`}
            role="button"
          >
            Start building
          </Link>
          <a
            href="https://github.com/open-austin/budgetparty/blob/master/README.md"
            target="_blank"
            className={styles.link}
          >
            <p>More about this project</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Welcome;
