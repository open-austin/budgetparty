import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import configureStore from 'redux/configureStore';

import App from 'components/App';
import Welcome from 'components/Welcome';
import Fund from 'components/BodyContent/Fund';
import Services from 'components/BodyContent/Services';
import ServiceType from 'components/ServiceType';
import Report from 'components/BodyContent/Report';
import Results from 'components/BodyContent/Results';
import ResultsSingle from 'components/BodyContent/ResultsSingle';

const store = window.store = configureStore();

// import react router dependencies
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const router = (
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="/fund" components={Fund} />
          <Route path="/services" component={Services} />
          <Route path="/services/:groupId" component={ServiceType} />
          <Route path="/report" component={Report} />
          <Route path="/results" component={Results} />
          <Route path="/results/:key" component={ResultsSingle} />
        </Route>
      </Router>
    </IntlProvider>
  </Provider>
);

render(router, document.getElementById('root'));
