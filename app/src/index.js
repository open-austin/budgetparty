import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'redux/configureStore';

import App from 'components/App';
import Welcome from 'components/Welcome';
import Fund from 'components/BodyContent/Fund';
import Services from 'components/BodyContent/Services';
import ServiceType from 'components/ServiceType';

const store = window.store = configureStore();

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/fund" components={Fund} />
        <Route path="/services" component={Services} />
        <Route path="/services/:groupName" component={ServiceType} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
