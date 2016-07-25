import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import BottomStickyNav from 'components/BottomStickyNav';

import styles from './styles.scss';

class Taxes extends Component {
  render() {
    return (
      <div>
        <DollarCount />
        <div className={styles.contentBody}>
          <h1>Taxes Page</h1>
        </div>
        <BottomStickyNav />
      </div>
    );
  }
}

export default Taxes;
