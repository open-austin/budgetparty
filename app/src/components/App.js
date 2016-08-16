import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from 'styles/base.scss';

import { setGlobalError } from 'actions/ui';
import {
  changeDepartmentAmount,
  updateServiceSpendingAmount,
  resetDepartmentAmount,
} from 'actions/data';

import Main from 'components/Main';

const mapStateToProps = (state) => ({
  globalError: state.ui.globalError,
  data: state.data,
});

const mapDispatchToProps = {
  setGlobalError,
  changeDepartmentAmount,
  updateServiceSpendingAmount,
  resetDepartmentAmount,
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
