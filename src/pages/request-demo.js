import React from 'react'
import { Layout } from '../components/layout.js'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { FlexItem } from '../components/workplace-biases/workplace-biases.styles'

const RequestDemoPage = (props) => {
  const data = get(props, 'data.contentfulRequestDemoPage')
  const {
    contactHeader,
    demoBody,
    demoHeader,
    faqHeader,
    sampleText,
    demoImage,
  } = data

  return (
    <Layout>
      <h1>Request Demo Page Placeholder</h1>
      <h4>{sampleText}</h4>
      <hr />
      <FlexItem>
        <Img fluid={demoImage.fluid} />
      </FlexItem>
      <h1>{demoHeader}</h1>
      <h4>{demoBody}</h4>
      <hr />
      <h1>{faqHeader}</h1>
      <hr />
      <h1>{contactHeader}</h1>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    contentfulRequestDemoPage(contentful_id: { eq: "5NNU54PoXgqZI29cR8v5i" }) {
      contactHeader
      demoBody
      demoHeader
      faqHeader
      sampleText
      demoImage {
        fluid {
          aspectRatio
          src
          sizes
          srcSet
        }
      }
    }
  }
`

export default RequestDemoPage
