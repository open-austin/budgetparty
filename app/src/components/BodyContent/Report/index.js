import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';

import styles from '../styles.scss';

class Report extends Component {
  render() {
    debugger
    return (
      <div>
        <DollarCount data={this.props.data} />

        <div className={styles.contentBody}>
          <div>
            <h1>Report</h1>
            <p>persequeris. Omnis molestie ex est, te quo tale suas Complete the below sections. ale suas Complete the below.</p>
          </div>

        </div>

        <NavBottom />
      </div>
    );
  }
}

export default Report;
