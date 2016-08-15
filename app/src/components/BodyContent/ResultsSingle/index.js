import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import { FormattedNumber } from 'react-intl';

import styles from '../styles.scss';

const ResultsSingle = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return { results: [] };
  },
  componentWillMount: function() {
    this.bindAsArray(firebase.database().ref('userResults'), 'results');
  },

  listItemColor: function(amount) {
    return  amount < 847189704 ? 'list-group-item-danger' : 'list-group-item-success'
  },

  render() {
    const { results } = this.state;
    const { key } = this.props.params;
    const i = results.findIndex((result) => result['.key'] === key);
    const result = results[i];
    const budgetArray = result.budgetArray;
    const sortedDepartments = _.sortBy(budgetArray, (dept) => dept.item);

    return (
      <div className="container">
        <div className="page-header">
          <Link to="/results">Back</Link>
          <h1>Results for <small>{result.name}</small></h1>
        </div>

        <ul className="list-group">
          <li className={`list-group-item ${this.listItemColor(result.totalBudget)}`}>
            <span className="badge">
              <FormattedNumber
                value={result.totalBudget}
                style="currency"
                currency="USD"
              />
            </span>
            Total Budget
          </li>
          {
            sortedDepartments.map((dept, index) =>
              <li className={'list-group-item'} key={index}>
                <span className="badge">
                  <FormattedNumber
                    value={dept.amount}
                    style="currency"
                    currency="USD"
                  />
                </span>
                { dept.item }
              </li>
            )
          }
        </ul>

      </div>
    );
  },
});

export default ResultsSingle;
