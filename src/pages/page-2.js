import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ModalSend } from '../components/ModalSend.js'

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />

      <Link to="/">Go back to the homepage</Link>
      <ModalSend />
    </Layout>
  )
}

export default SecondPage
