import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage/heroImage.js'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const heroImage = get(this, 'props.data.contentfulHeroImage');
    const navImage = get(this, 'props.data.contentfulLogo');
    
    return (
      <Layout location={this.props.location} navImage = {navImage}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <HeroImage data= {heroImage} />
        </div>
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
      contentfulLogo(contentful_id: {eq: "3hnpJSkwyNGp6Vz23qHuIn"}) {
        id
        title
        logoImage {
          fixed(width: 100, height: 100) {
            src
            aspectRatio
            width
            height
          }
        }
    }
  }
`