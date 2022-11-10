import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Honest French Wallaby</title>
        <meta property="og:title" content="Honest French Wallaby" />
      </Helmet>
    </div>
  )
}

export default Home
