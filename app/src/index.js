import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'redux/configureStore';

import App from 'components/App';
import Welcome from 'components/Welcome';
import Taxes from 'components/Taxes';
import Services from 'components/Services';

const store = window.store = configureStore();

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path="/taxes" components={Taxes}></Route>
        <Route path="/services" component={Services}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
