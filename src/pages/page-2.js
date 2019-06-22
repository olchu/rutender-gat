import React from 'react'
import { Link } from 'gatsby'
import content from '../data/whyData.json'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => {
  console.log(content)
  return (
    <Layout>
      <SEO title="Page two" />

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
