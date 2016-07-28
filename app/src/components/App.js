import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from 'styles/base.scss';

import { setGlobalError } from 'actions/ui';

import Main from 'components/Main';

const mapStateToProps = (state) => ({
  globalError: state.ui.globalError,
  data: state.data });

const mapDispatchToProps = {
  setGlobalError,
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
