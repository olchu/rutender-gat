import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CarouselSection } from '../components/CarouselSection'
import { WhySection } from '../components/WhySection'
import { ServiceSection } from '../components/ServiceSection'
import { PriceSection } from '../components/PriceSection'
import { ModalSend } from '../components/ModalSend'
import Button from 'react-bootstrap/Button'

const IndexPage = () => {
  const [isShowModal, setShowModal] = React.useState(false)

  return (
    <Layout setShowModal={() => setShowModal(true)}>
      <SEO title="Home" />
      <CarouselSection setShowModal={() => setShowModal(true)} />
      <WhySection />
      <ServiceSection />
      <PriceSection setShowModal={() => setShowModal(true)} />
      <ModalSend show={isShowModal} handleClose={() => setShowModal(false)} />
    </Layout>
  )
}

export default IndexPage
