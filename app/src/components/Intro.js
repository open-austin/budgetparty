import React, { Component } from 'react'
import Navigation from './Navigation'
import { Route, Link } from 'react-router-dom'
import moneyImg from '../images/money.svg'

const introText = [
  "As a council member you have $969.2 Million to fund services for all of Austin, Texas",
  "This money comes frm the General Fund for 2016-17",
  "This money helps Austin run programs and employ 13,838 civil servants",
  "Outside effects like population change and overall economic activity cause the fund to vary year to year",
  "It's now up to you to make sure we allocate the funds and create a fair budget."
]

const IntroPage = (props) => {
  const nextId = Number(props.params.id) + 1;
  const nextUrl = `/intro/${nextId}`;
  const isLastIntro = introText.length === Number(props.params.id);

  return (
    <div>
      <Link to="/dashboard" className="skip-intro">Skip Intro</Link>
      <img src={moneyImg} alt="Money Emoji"/>
      <p className="intro-text">{props.text}</p>
      {
        isLastIntro
        ? <Link to="/dashboard" className="intro-start-button">Get Started</Link>
        : <Link to={nextUrl} className="intro-next-button">Next</Link>
      }
    </div>
  )
}

export default class Intro extends Component {
  render () {
    return (
      <Route path='/intro/:id' render={({match}) => <IntroPage {...match} text={introText[match.params.id - 1]} />} />
    )
  }
}
