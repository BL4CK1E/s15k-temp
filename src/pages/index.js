import React from 'react'

import Logo from '../images/main-logo.png'

import OpeningHours from '../components/opening-hours'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container vh-100">
      <div>
        <img className="main-logo" src={Logo} alt="Logo" />
      </div>
      <OpeningHours />
    </div>
  </Layout>
)

export default IndexPage
