import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedNumber } from 'react-intl';

import styles from './styles.scss';

import upArrowIcon from 'images/icons/upArrow.gif';
import downArrowIcon from 'images/icons/downArrow.gif';

class ChangedItem extends Component {
  render() {
    const { name, change } = this.props.dept;
    const icon = change > 0 ? upArrowIcon : downArrowIcon;

    return (
      <p>
        <img
          src={icon}
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
