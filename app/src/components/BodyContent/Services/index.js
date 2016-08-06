import React, { Component, PropTypes } from 'react';
import DollarCount from 'components/DollarCount';
import NavBottom from 'components/NavBottom';
import ServiceIcon from 'components/ServiceIcon';

import styles from '../styles.scss';

class Services extends Component {
  render() {
    return (
      <div>
        <DollarCount data={this.props.data}/>
	  <div className={styles.contentBody}>
            <div>
              <h1>Services</h1>
              <p>Services are  is the amount of spending money the city has. It collects these through taxes and fees on citizens. Complete the below sections. You can always change your answer.</p>
            </div>

            <div className={styles.serviceGroupsWrapper}>

              { this.props.data.services.groups.map((group, i) =>
                <ServiceIcon
                group={group} key={i} i={i}
                />
              )}

             </div>
          </div>

        <NavBottom />
      </div>
    );
  }
}

export default Services;
