import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DollarCount from '../components/DollarCount'

const mapStateToProps = (state) => ({
  data : state.services
})

const DollarAmountContainer = connect(mapStateToProps)(DollarCount);

export default DollarAmountContainer;
