import React, { Component, PropTypes } from 'react';
import TopStickyAmounts from 'components/TopStickyAmounts';
import BottomStickyNav from 'components/BottomStickyNav';

class Taxes extends Component {
  render() {
    return (
      <div>
        <TopStickyAmounts />
        <h1>Taxes Page</h1>
        <BottomStickyNav />
      </div>
    );
  }
}

export default Taxes;
