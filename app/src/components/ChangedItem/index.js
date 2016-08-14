import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedNumber } from 'react-intl';

import styles from './styles.scss';

class ChangedItem extends Component {
  render() {
    const { name, change } = this.props.dept;
    const icon = change > 0 ? 'upArrow' : 'downArrow';

    return (
      <p>
        <img
          src={`../../src/images/icons/${icon}.gif`}
          alt="arrow"
          style={{ width: '15px' }}
        />
        {'   '} {name} by {' '}
        <FormattedNumber
          value={change}
          style="percent"
          maximumFractionDigits={2}
          maximumIntegerDigits={4}
        />
      </p>
    );
  }
}

export default ChangedItem;
