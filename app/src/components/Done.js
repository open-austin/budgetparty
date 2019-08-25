import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moneyImg from '../images/money.svg'
// import PropTypes from 'prop-types';


export default class Done extends Component {
  render() {
    return (
      <div className="intro">
        <img src={moneyImg} className="intro__img" alt="Money Emoji" />
        <p className="intro__text">
          Thank You! <br />
          Your budget has been submitted for review
        </p>
        <Link to="/dashboard" className="Submit__next-button">Go Home</Link>
        <a href="https://github.com/open-austin/budgetparty#readme" target="_blank" className="center-text">
          Learn More about Budget Party
        </a>
      </div>
    )
  }
}

// Done.propTypes = {
//
// };
