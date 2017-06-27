import React, { Component } from 'react';
import Contributors from './Contributors';
import { Link } from 'react-router-dom'

import logoAustinMonitor from '../images/landing/austin-monitor-circle-logo.png';
import logoGlasshouse from '../images/landing/glasshouse-policy-circle-logo.png';
import logoMozilla from '../images/landing/mozilla-circle-logo.png';
import logoOpenAustin from '../images/landing/open-austin-circle-logo.png';
import IconVoice from '../images/landing/voice-icon.svg';
import Confetti from '../images/landing/confetti.svg';
import HomepageScreens from '../images/landing/homepage-screens.svg';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { contributors: [] };
  }

  componentWillMount() {
    fetch(this.props.contributorsURL)
      .then(response => response.json())
      .then(contributors => this.setState({ contributors }));
  }

  render() {
    return <div id="landing">
      <section className="section">
        <h1>Budget Party</h1>
        <h3>Understand & Augment a City Budget for Austin</h3>
        <p>
          <Link to="/login" className="btn btn-cta">Start Budgeting</Link>
        </p>
        <div className="screens-container">
          <img className="bg-confetti" alt="Screen confetti" src={Confetti}/>
          <img className="icon-screens" alt="Application Preview" src={HomepageScreens}/>
        </div>
        <h1>You Have a Voice!</h1>
        <h3>City Spending Doesn't Have to Be Mystical</h3>
        <img alt="Voice" className="icon-voice" src={IconVoice}/>
        <p>Commuting, construction, parks, public safety—every day you are impacted by city budget decisions.</p>
      </section>
      <section className="section section-secondary">
        <h1 className="header-light">Try Out The Beta Version Of Budget Party</h1>
        <p>
          <Link to="/login" className="btn btn-secondary btn-cta">Start Budgeting</Link>
        </p>
      </section>
      <section className="section">
        <h1>It's A Party!</h1>
        <h3>Let’s work together to make Participatory Budgeting work for our city</h3>
        <p><em>A few of our Budget Party</em></p>
        <Contributors contributors={this.state.contributors}/>
        <p>We want to work with our neighbors to create an open source platform for citizen inclusion</p>
        <p>Our team currently includes developers, designers, a publisher, a curriculum writer and educators</p>
        <p>
          <Link to="/login" className="btn btn-cta">Start Budgeting</Link>
        </p>
      </section>
      <section className="section section-tertiary">
        <h1>Support & More</h1>
        <h3>A few of the awesome organizations that have funded and supported budget party.</h3>
        <ul className="bubble-list">
          <li className="bubble"><img alt="Austin Monitor" src={logoAustinMonitor} height="100" width="100"/></li>
          <li className="bubble"><img alt="Glasshouse" src={logoGlasshouse} height="100" width="100"/></li>
          <li className="bubble"><img alt="Mozilla" src={logoMozilla} height="100" width="100"/></li>
          <li className="bubble"><img alt="Open Austin" src={logoOpenAustin} height="100" width="100"/></li>
        </ul>
        <ul className="link-list">
          <li><Link to="/login">Start Budgeting</Link></li>
          <li><Link to="/application">Application</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><a href="https://github.com/open-austin/budgetparty" target="_blank">View Budget Party on Github</a></li>
          <li><a href="https://victoria283.typeform.com/to/K5Ppy1" target="_blank">Contact or Submit Feedback</a></li>
        </ul>
      </section>
    </div>;
  }
}

Landing.defaultProps = {
  contributorsURL: 'https://api.github.com/repos/open-austin/budgetparty/contributors'
};
