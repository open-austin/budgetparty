import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import BottomStickyNav from 'components/BottomStickyNav';

import styles from './styles.scss';

class Services extends Component {
  render() {
    return (
      <div>
        <DollarCount />
        <div className={styles.contentBody}>
          <h1>Services Page</h1>
        </div>
        <BottomStickyNav />
      </div>
    );
  }
}

export default Services;
