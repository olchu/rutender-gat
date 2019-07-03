import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CarouselSection } from '../components/CarouselSection'
import { WhySection } from '../components/WhySection'
import { ServiceSection } from '../components/ServiceSection'
import { PriceSection } from '../components/PriceSection'
import { ModalSend } from '../components/ModalSend'

const IndexPage = () => {
  const [isShowModal, setShowModal] = React.useState(false)
  const [choice, setChoice] = React.useState('')

  return (
    <Layout setShowModal={() => setShowModal(true)}>
      <SEO title="Home" />
      <CarouselSection setShowModal={() => setShowModal(true)} />
      <WhySection />
      <ServiceSection />
      <PriceSection setChoice={setChoice} setShowModal={setShowModal} />
      <ModalSend
        choice={choice}
        show={isShowModal}
        handleClose={() => setShowModal(false)}
      />
    </Layout>
  )
}

export default IndexPage
