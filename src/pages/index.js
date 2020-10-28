import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import HeroImage from '../components/hero.js'
import ProductSpecs from '../components/productSpecs.js'
import Testimonials from '../components/testimonials.js'
import base from '../components/base.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const heroImage = get(this, 'props.data.contentfulHeroImage');
    const productFeature = get(this, 'props.data.contentfulProductSpecs');
    const Text = get(this, 'props.data.allContentfulText.nodes');
    
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <HeroImage data= {heroImage} />
        </div>
        <ProductSpecs 
        productHeader = {Text[2].text.text}
        productImg={productFeature.productPreviewImage.fluid}
        productDescription={productFeature.specDescription.specDescription}
        />
        <Testimonials 
        testHeader = {Text[1].text.text}
        testBody = {Text[0].text.text}
        />
      </Layout>
    )
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulHeroImage(contentful_id: {eq: "16nJKq9QmPQ1Mgn7jnaAmg"}) {
      id
      title
      desktop {
        fluid {
          src
        }
      }
      tablet {
        fluid {
          src
        }
      }
      mobile {
        fluid {
          src
        }
      }
    }
    contentfulProductSpecs(contentful_id: {eq: "31xhfbVRrqekDhzY4hx6fd"}) {
      productPreviewImage {
        fluid {
          aspectRatio
          src
          srcSet
          sizes
        }
        contentful_id
      }
      specDescription {
        specDescription
      }
    }
    allContentfulText(
      filter: {
        contentful_id: {
          in: [
            "4Jzc5NlkyQb1Q0EOvCZEww"
            "3uMgGxmfbdUp6kbhIWNur6"  
            "19Zz0RUKpy1FQULSR783EM"
          ]
        }
      }
      ) {
      nodes {
        text {
          text
        }
      }
    }
  }
`