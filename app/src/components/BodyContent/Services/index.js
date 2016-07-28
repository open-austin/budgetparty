import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';

import styles from '../styles.scss';

class Services extends Component {
  render() {
    return (
      <div>
        <DollarCount data={this.props.data}/>
        <div className={styles.contentBody}>
          <h1>Services Page</h1>
        </div>
        <NavBottom />
      </div>
    );
  }
}

export default Services;
