import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from 'styles/base.scss';

import { setGlobalError } from 'actions/ui';

class App extends Component {
  static propTypes = {
    globalError: PropTypes.object,
    setGlobalError: PropTypes.func,
  }

  handleClick = () => {
    this.props.setGlobalError('blah');
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Hack the Budget</h1>
          <p className="lead">You can determine the future of your neighborhood and City.</p>
          <a className="btn btn-lg btn-success" href="#" role="button">Get Started</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  globalError: state.ui.globalError,
});

const mapDispatchToProps = {
  setGlobalError,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
