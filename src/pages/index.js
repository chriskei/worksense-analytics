import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import HeroImage from '../components/hero.js'
import ProductSpecs from '../components/product-specs.js'
import base from '../components/base.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const heroImage = get(this, 'props.data.contentfulHeroImage');
    const productSpecs = get(this, 'props.data.contentfulProductSpecs');
    
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <HeroImage data= {heroImage} />
        </div>
        <h1 className="productSpecs">Product Specs</h1>
        <ProductSpecs data={productSpecs}/>
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
      id
      title
      productPreviewImage {
        fluid(maxWidth: 250) {
          src
        }
        id
      }
      specDescription {
        specDescription
      }
    }
  }
`