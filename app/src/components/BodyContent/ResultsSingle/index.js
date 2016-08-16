import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import { FormattedNumber } from 'react-intl';

import data from '../../../data/services';
import styles from './styles.scss';


const ResultsSingle = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return { items: [] };
  },

  componentWillMount: function() {
    let firebaseRef = firebase.database().ref('userResults');
    this.bindAsArray(firebaseRef, 'items');
  },

  listItemColor: function(amount) {
    return amount < data.servicesSum ? 'list-group-item-danger' : 'list-group-item-success';
  },

  render() {
    const { items } = this.state;
    const { key } = this.props.params;
    const i = items.findIndex((item) => item['.key'] === key);
    const item = items[i];

    return (
      <div className={styles.container}>
        {
          item &&
          <div className="page-header">
            <Link to="/results">Back</Link>
            <h1>Results for <small>{item.name}</small></h1>
          </div>
        }
        {
          (item && item.comment) &&
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                Comments
              </h3>
            </div>
            <div className="panel-body">
              {item.comment}
            </div>
          </div>
        }
        {
          item &&
          <ul className="list-group">
            <li className={`list-group-item ${this.listItemColor(item.totalBudget)}`}>
              <span className="badge">
                <FormattedNumber
                  value={item.totalBudget}
                  style="currency"
                  currency="USD"
                />
              </span>
              Total Budget
            </li>
          {
            item.budgetArray.map((dept, index) =>
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
        }
      </div>
    );
  },
});

export default ResultsSingle;
