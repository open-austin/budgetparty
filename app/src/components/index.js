import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import Intro from './Intro'
import DashboardContainer from '../containers/Dashboard'
import ServiceContainer from '../containers/Service'
import DepartmentContainer from '../containers/Department'
import LearnMore from './Department/LearnMore'
import ExplainContainer from '../containers/Explain'
import SubmitContainer from '../containers/Submit'
import User from './User'
import Done from './Done'
import { firebaseAuth } from '../config/constants'
import { logout } from '../helpers/auth'

import store from '../store';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authed: false,
      loading: true,
      user: {},
    }
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => this.updateAuthState(user))
  }

  componentWillUnmount() {
    this.removeListener()
  }

  updateAuthState(user) {
    if (user) {
      this.setState({
        authed: true,
        loading: false,
        user,
      })
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  handleLogout() {
    const warning = confirm('Are you sure you want to log out?')
    if (warning) {
      console.log("LOGGED OUT")
      logout()
      this.setState({ authed: false })
    }
  }

  render() {
    const { authed, user, loading } = this.state
    return loading === true ? <h1>Loading</h1> : (
      <IntlProvider locale="en">
        <Provider store={store}>
          <Router>
            <div className="container">
              <div className="row">
                <Switch className="row">
                  <Route
                    path="/" exact render={() => {
                      return authed
                      ? <Redirect to="/dashboard" />
                      : <Redirect to="/login" />
                    }}
                  />
                  <Route
                    path="/login" isAuthed={authed} render={() => {
                      return authed
                      ? <Redirect to="/intro/1" />
                      : <Home />
                    }}
                  />
                  <Route path="/intro/:id" render={props => <Intro {...props} />} />
                  <Route path="/dashboard" render={props => <DashboardContainer {...props} user={user} />} />
                  <Route path="/service/:id" exact render={props => <ServiceContainer {...props} />} />
                  <Route path="/service/:service_id/department/:id" exact
                    render={props => <DepartmentContainer {...props} user={user} />}
                  />
                  <Route path="/service/:service_id/department/:id/learn-more"
                    render={props => <LearnMore {...props} />}
                  />
                  <Route path="/service/:service_id/department/:id/explain"
                    render={props => <ExplainContainer {...props} />}
                  />
                  <Route path="/user" render={() => {
                    return (
                      <User
                        isAuthed={authed}
                        handleLogout={this.handleLogout.bind(this)}
                        user={user}
                      />
                    )
                  }} />
                  <Route path="/submit" render={(props) => {
                    return <SubmitContainer {...props} user={user} />
                  }} />
                  <Route path="/done" render={(props) => {
                    return <Done {...props} />
                  }} />
                  <Route render={() => <h3>404, you ain't supposed to be here</h3>} />
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
      </IntlProvider>
    );
  }
}
