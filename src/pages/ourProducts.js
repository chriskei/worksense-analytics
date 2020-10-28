import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage/heroImage.js'


const OurProducts = () => {
    const productHero = get(this, 'data.contentfulHeroImage')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <HeroImage data = {productHero} />
        <h1>Our Products Page Placeholder</h1>
      </Layout>
    );
  };
  
  export default OurProducts;

  export const pageQuery = graphql`
    query ProductsQuery {
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
    }
`