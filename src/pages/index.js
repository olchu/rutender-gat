import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CarouselSection } from '../components/CarouselSection'
import { WhySection } from '../components/WhySection'
import { ServiceSection } from '../components/ServiceSection'
import { PriceSection } from '../components/PriceSection'
import { SendModal } from '../components/SendModal'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselSection />
    <WhySection />
    <ServiceSection />
    <PriceSection />
    <SendModal />
  </Layout>
)

export default IndexPage
