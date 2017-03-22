import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import { FormattedNumber } from 'react-intl';

import data from '../../../data/services';
import styles from './styles.scss';

const Results = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return { results: [] };
  },
  componentWillMount: function() {
    this.bindAsArray(firebase.database().ref('userResults'), 'results');
  },

  listItemColor: function(amount) {
    return  amount < data.servicesSum ? 'list-group-item-danger' : 'list-group-item-success'
  },

  render() {
    const { results } = this.state;
    const sortedResults = results.sort((a, b) => {
      return (a['.key'] > b['.key']) ? 0 : 1;
    });

    return (
      <div className={styles.container}>
        <div className="page-header">
          <h1>Results <small>Updated upon new submissions</small></h1>
        </div>
        <ul className="list-group">
          {
            sortedResults.map((result, i) =>
              <Link to={`/results/${result['.key']}`} key={i}>
                <li className={`list-group-item ${this.listItemColor(result.totalBudget)}`}>
                  <span className="badge">
                    <FormattedNumber
                      value={result.totalBudget}
                      style="currency"
                      currency="USD"
                    />
                  </span>
                  { result.name }
                </li>
              </Link>
            )
          }
        </ul>

      </div>
    );
  },
});

export default Results;
