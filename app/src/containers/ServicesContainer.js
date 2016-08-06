import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Services from '../components/BodyContent/Services'

const mapStateToProps = (state) => ({
  groups : state.services.groups
})

const ServicesContainer = connect(mapStateToProps)(Services);

export default ServicesContainer;
