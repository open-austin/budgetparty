import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import firebase from 'firebase';
import { firebaseConfig } from 'constants/index';
firebase.initializeApp(firebaseConfig);

import styles from './styles.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.rootWrapper}>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
