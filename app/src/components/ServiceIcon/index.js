import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

class ServiceIcon extends Component {
  render() {
    const { name, image, url } = this.props.group;

    return (
      <div className={styles.serviceIconWrapper}>
        <Link to={`/services/${url}`}>
          <img src={image}
            className={styles.serviceTypeIcon}
            alt={`${styles.name} icon`}
          />
          <p className={styles.serviceTypeText}>{name}</p>
        </Link>
      </div>
    )
  }
}

export default ServiceIcon;
