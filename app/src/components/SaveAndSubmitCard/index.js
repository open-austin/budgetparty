import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import styles from './styles.scss';


const SaveAndSubmitCard = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      data: [],
      isSubmitted: false,
    };
  },

  componentWillMount: function() {
    this.bindAsArray(firebase.database().ref('userResults'), 'budgetData');
  },

  handleSubmit: function(e) {
    e.preventDefault();
    const name = this.refs.name.value.trim();
    const email = this.refs.email.value.trim();
    const budgetArray = this.summarizeUserBudget(this.props.data);
    const totalBudget = this.props.data.servicesSum;
    this.onSubmit({ name, email, budgetArray, totalBudget });
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.setState({ isSubmitted: true });
  },

  summarizeUserBudget: function(data) {
    let budgetArray = [];

    data.departments.map(function(dept){
      const deptObj = { item: dept.name, amount: dept.amount };
      budgetArray.push(deptObj);
    });

    return budgetArray;
  },

  onSubmit: function(result) {
    this.firebaseRefs['budgetData'].push(result);
  },

  componentWillUnmount: function() {
    // I was getting a console error when I was unbinding this. So now I'm not.
    // this.unbind('budgetData');
  },

  render: function() {
    let isSubmitted = this.state.isSubmitted;
    return (
      <div className={styles.cardOutline}>
        <div className={styles.cardHeader}>
          <img
            src="../../src/images/icons/saveAndSubmit.gif"
            alt="Envelope Icon"
            className={styles.icon}
          />
          {
            isSubmitted &&
            <h3>Thanks!</h3>
          }
          {
            !isSubmitted &&
            <div>
              <h3>Save & Submit</h3>
              <h4>Your Budget</h4>
            </div>
          }
        </div>
        <div className={`${styles.cardBody} ${isSubmitted ? 'hidden' : ''}`}>
          <p>Submit your budget</p>

          <label htmlFor="name" className={styles.inputLabel}>Name</label>
          <input
            ref="name"
            type="text"
            placeholder="Name"
            name="name"
            className={styles.formInput}
          />

          <label htmlFor="name" className={styles.inputLabel}>Email</label>
          <input type="text" placeholder="Email" name="email" ref="email" className={styles.formInput} />
          <div
            className={`${styles.buttonWhiteOutline} btn btn-lg btn-success`}
            onClick={this.handleSubmit}
          >
            Submit
          </div>
        </div>
      </div>
    );
  },
});

export default SaveAndSubmitCard;
