import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import introImg0 from '../images/intro-images/0.svg';
import introImg1 from '../images/intro-images/1.svg';
import introImg2 from '../images/intro-images/2.svg';
import introImg3 from '../images/intro-images/3.svg';
import introImg4 from '../images/intro-images/4.svg';
import introConfetti0 from '../images/intro-confetti/0.svg';
import introConfetti1 from '../images/intro-confetti/1.svg';
import introConfetti2 from '../images/intro-confetti/2.svg';
import introConfetti3 from '../images/intro-confetti/3.svg';
import introConfetti4 from '../images/intro-confetti/4.svg'


const introText = [
  "As a council member you have $969.2 Million to fund services for all of Austin, Texas",
  "This money comes from the General Fund for 2016-17",
  "This money helps Austin run programs and employs 13,838 civil servants",
  "Outside effects like population change and overall economic activity cause the fund to vary year to year",
  "It's now up to you to make sure we allocate the funds and create a fair budget."
]

const introImages = [
  { src: introImg0, alt: 'open hand with coins', confetti: introConfetti0 },
  { src: introImg1, alt: 'money bag', confetti: introConfetti1 },
  { src: introImg2, alt: 'two anonymous civil servants', confetti: introConfetti2 },
  { src: introImg3, alt: 'bar graph trending up', confetti: introConfetti3 },
  { src: introImg4, alt: 'two children smiling', confetti: introConfetti4 },
]

const IntroPage = (props) => {
  const nextId = Number(props.params.id) + 1;
  const nextUrl = `/intro/${nextId}`;
  const isLastIntro = introText.length === Number(props.params.id);
  const imageIndex = props.params.id - 1
  const image = introImages[imageIndex]

  return (
    <div className="intro">
      <Link to="/dashboard" className="intro__skip">Skip Intro</Link>
      <div className="intro__image-wrapper">
        <img src={image.confetti} className="intro__confetti" alt="Confetti" />
        <img src={image.src} className={`intro__img-${imageIndex}`} alt={image.alt} />
      </div>
      <p className="intro__text">{props.text}</p>
      <div className="intro__button-flex-container">
        {
          isLastIntro
          ? <Link to="/dashboard" className="intro__start-button"><span>Get Started</span></Link>
          : <Link to={nextUrl} className="intro__next-button">Next</Link>
        }
      </div>
    </div>
  )
}

export default class Intro extends Component {
  render() {
    return (
      <Route path="/intro/:id" render={({ match }) => <IntroPage {...match} text={introText[match.params.id - 1]} />} />
    )
  }
}

IntroPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  text: PropTypes.string.isRequired,
};
