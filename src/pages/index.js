import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CarouselSection } from "../components/CarouselSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselSection></CarouselSection>
  </Layout>
)

export default IndexPage
