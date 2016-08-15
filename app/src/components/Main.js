import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import firebase from 'firebase';
import { firebaseConfig } from 'constants/index';
firebase.initializeApp(firebaseConfig);

class Main extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
