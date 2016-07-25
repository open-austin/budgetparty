import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';

import styles from './styles.scss';

class Taxes extends Component {
  render() {
    return (
      <div>
        <DollarCount />
        <div className={styles.contentBody}>
          <h1>Taxes Page</h1>
        </div>
        <NavBottom />
      </div>
    );
  }
}

export default Taxes;
