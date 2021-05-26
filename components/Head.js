import { Component } from 'react'
import Head from 'next/head'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

class Head_ extends Component {

  componentDidMount() {
    new WOW().init()
  }

  render () {
    return (
      <Head>
        <title>Health Token</title>
        <link rel="icon" href={'/logo.svg'} sizes="60x60" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
      </Head>
    )
  }
}

export default Head_
