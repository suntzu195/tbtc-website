import React from 'react'
import { Link } from 'gatsby'
import { Announcement, Footer, Header, Newsletter } from './lib'

import '../css/app.scss'


export default (props) => {
  const { children } = props

  return (
    <div className="main">
      <Header />
      <Announcement>
        <Link to="/news/2020-02-14-ropsten">tBTC is now live on Ropsten</Link>. Mainnet launch is coming soon.
      </Announcement>
      <div className="app">
        { children }
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}