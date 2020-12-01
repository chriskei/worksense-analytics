import React from 'react'
import { Layout } from '../components/layout/layout.js'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Form } from '../components/form/form'
import { Faq } from '../components/faq/faq'
import { Hero } from '../components/hero/hero'
import { SectionHeader } from '../components/section-header/section-header'
import {
  DemoWaveBackground,
  DemoWaveBottom,
  DemoWaveTop,
  ContactWaveBackground,
  ContactWaveBottom,
  ContactWaveTop
} from '../assets/waves'
import { FAQS } from '../assets/headers'
import { colors } from '../assets/colors'
import {
  DemoWaveContainer,
  ContactWavesContainer,
  SectionHeaderContainer
} from '../pages-styles/request-demo.styles'

const RequestDemoPage = (props) => {
  const data = get(props, 'data.contentfulRequestDemoPage')
  const {
    contactHeader,
    demoBody,
    demoHeader,
    demoImage,
    faqCategories,
    faqImages,
    faqQuestionsAndAnswers
  } = data

  return (
    <Layout>
      <DemoWaveContainer>
        <DemoWaveBackground />
        <DemoWaveBottom />
        <DemoWaveTop />
      </DemoWaveContainer>
      <Hero header={demoHeader} text={demoBody} imgData={demoImage} />
      <Form name="demo" />
      <FAQS />
      <Faq
        faqCategories={faqCategories}
        faqImages={faqImages}
        faqQuestionsAndAnswers={faqQuestionsAndAnswers}
      />
      <SectionHeaderContainer>
        <SectionHeader title={contactHeader} color={colors.tan} />
      </SectionHeaderContainer>
      <Form name="contact" />
      <ContactWavesContainer>
        <ContactWaveBackground />
        <ContactWaveBottom />
        <ContactWaveTop />
      </ContactWavesContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    contentfulRequestDemoPage(contentful_id: { eq: "5NNU54PoXgqZI29cR8v5i" }) {
      contactHeader
      demoBody
      demoHeader
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
