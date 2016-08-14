import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

class SaveAndSubmitCard extends Component {
  render() {
    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <img
            src="../../src/images/icons/saveAndSubmit.gif" 
            alt="Envelope Icon"
            className={styles.icon}
          />
          <h3>Save & Submit</h3>
          <h4>Your Budget</h4>
        </div>
        <div className={styles.cardBody}>
          <p>Submit your budget and recieve a link to revist your choices</p>

          <label htmlFor="name" className={styles.inputLabel}>Name</label>
          <input type="text" placeholder="Name" name="name" className={styles.formInput} />
          <label htmlFor="name" className={styles.inputLabel}>Email</label>
          <input type="text" placeholder="Email" name="email" className={styles.formInput} />
          <div className={`${styles.buttonWhiteOutline} btn btn-lg btn-success`}>Submit</div>
        </div>
      </div>
    );
  }
}

export default SaveAndSubmitCard;
