import React from 'react'
import { Layout } from '../components/layout.js'
import { colors } from '../assets/colors.js'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Form } from '../components/form/form'
import { Faq } from '../components/faq/faq'
import {
  ContactHeader,
  RequestDemoContainer,
  LeftContainer,
  RightContainer
} from '../pages-styles/request-demo.styles'

const RequestDemoPage = (props) => {
  const data = get(props, 'data.contentfulRequestDemoPage')
  const {
    contactHeader,
    demoBody,
    demoHeader,
    faqHeader,
    demoImage,
    faqCategories,
    faqImages,
    faqQuestionsAndAnswers
  } = data

  return (
    <Layout bg={colors.tan}>
      <RequestDemoContainer>
        <LeftContainer>
          <h1>{demoHeader}</h1>
          <h4>{demoBody}</h4>
        </LeftContainer>
        <RightContainer>
          <Img fluid={demoImage.fluid} />
        </RightContainer>
      </RequestDemoContainer>
      <Form name="demo" submitText="Request Demo" />
      <Faq
        faqHeader={faqHeader}
        faqCategories={faqCategories}
        faqImages={faqImages}
        faqQuestionsAndAnswers={faqQuestionsAndAnswers}
      />
      <ContactHeader>{contactHeader}</ContactHeader>
      <Form name="contact" submitText="Submit" />
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
      demoImage {
        fluid {
          aspectRatio
          src
          sizes
          srcSet
        }
      }
      faqCategories
      faqImages {
        fluid {
          aspectRatio
          src
          sizes
          srcSet
        }
      }
      faqQuestionsAndAnswers {
        categoryLists {
          pairs {
            answer
            question
          }
        }
      }
    }
  }
`

export default RequestDemoPage
