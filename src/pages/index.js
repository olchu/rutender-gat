import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CarouselSection } from '../components/CarouselSection'
import { WhySection } from '../components/WhySection'
import { ServiceSection } from '../components/ServiceSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselSection></CarouselSection>
    <WhySection></WhySection>
    <ServiceSection></ServiceSection>
  </Layout>
)

export default IndexPage
