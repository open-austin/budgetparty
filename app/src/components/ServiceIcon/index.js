import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class ServiceIcon extends Component {
  render() {
    const { name } = this.props.group;
    let urlParam = name.toLowerCase().split(' ').join("_");
    return (
      <div className={styles.serviceIconWrapper}>
        <Link to={`/services/${urlParam}`}>
          <div className={styles.placeholderBtn}>

          </div>
          <p>{name}</p>
        </Link>
      </div>
    )
  }
}

export default ServiceIcon;
