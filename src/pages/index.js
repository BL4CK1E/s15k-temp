import React from 'react'

import Logo from '../images/main-logo.png'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container vh-100">
      <div>
        <img style={{maxWidth: 425}} src={Logo} alt="Logo" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
