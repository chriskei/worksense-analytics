import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage/heroImage.js'


const OurProducts = ( props ) => {
    const productHero = get(props, 'data.contentfulHeroImage')

    return (
      <Layout location={location}>
        <HeroImage data = {productHero} />
        <h1>Our Products Page Placeholder</h1>
      </Layout>
    );
  };
  
export default OurProducts;

export const pageQuery = graphql`
  query ProductsQuery {
    contentfulHeroImage(contentful_id: {eq: "1JzD8Q61WL1G42UuF4lrGb"}) {
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