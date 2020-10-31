import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout.js'
import { HeroImage } from '../components/hero-image/hero-image.js'

const OurProductsPage = (props) => {
  const productHero = get(props, 'data.contentfulHeroImage')

  return (
    <Layout location={location}>
      <HeroImage data={productHero} />
      <h1>Our Products Page Placeholder</h1>
    </Layout>
  )
}

export default OurProductsPage

export const pageQuery = graphql`
  query ProductsQuery {
    contentfulHeroImage(contentful_id: { eq: "1JzD8Q61WL1G42UuF4lrGb" }) {
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
