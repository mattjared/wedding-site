import React from 'react'
import Link from 'gatsby-link'
import Jumbotron from '../components/jumbotron'
import RSVP from '../components/RSVP'

const IndexPage = () => (
  <div>
    <Jumbotron
      headline="April 7th, 2018"
      subheadline="Austin, TX | More details to come!"
    />
    <RSVP />
  </div>
)

export default IndexPage
