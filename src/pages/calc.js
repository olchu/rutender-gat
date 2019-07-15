import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PriceSection } from '../components/PriceSection'
import { ModalSend } from '../components/ModalSend'
import { CalcPrice } from '../components/CalcPrice'

export default props => {
  const [isShowModal, setShowModal] = React.useState(false)
  const [choice, setChoice] = React.useState(['не выбрали конкретную услугу'])
  return (
    <Layout location={props.location} setShowModal={() => setShowModal(true)}>
      <SEO title="Калькулятор услуг" />
      <CalcPrice></CalcPrice>
      <PriceSection setChoice={setChoice} setShowModal={setShowModal} />
      <ModalSend
        choice={choice}
        show={isShowModal}
        handleClose={() => setShowModal(false)}
      />
    </Layout>
  )
}
