import React, { Component, PropTypes } from 'react';
import TopStickyAmounts from 'components/TopStickyAmounts';
import BottomStickyNav from 'components/BottomStickyNav';

class Services extends Component {
  render() {
    return (
      <div>
        <TopStickyAmounts />
        <h1>Services Page</h1>
        <BottomStickyNav />
      </div>
    );
  }
}

export default Services;
