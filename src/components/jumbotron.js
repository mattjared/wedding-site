import React from 'react'
import bgImage from './bg-hero.jpg'

console.log(bgImage);
const Jumbotron = ({ headline, subheadline }) => (
  <div className="jumbotron">
    <div className="jumbotron-text">
      <h1>{headline}</h1>
      <p>{subheadline}</p>
    </div>
    <div
      className="hero-img"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    />
  </div>
)

export default Jumbotron