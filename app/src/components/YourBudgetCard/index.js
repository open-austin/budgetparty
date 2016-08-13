import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

class SaveAndSubmitCard extends Component {
  render() {
    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <img src="../../src/images/icons/YourBudget.gif"
            className={styles.icon}
            alt="Your Budget Results icon"
          />
          <h3>Your Budget</h3>
          <h4>{this.props.data.servicesSum}</h4>
        </div>
        <div className={styles.cardBody}>
          <p>You increased the budget by $x,xxx,xxx or 8%</p>
        </div>
      </div>
    );
  }
}

export default SaveAndSubmitCard;
