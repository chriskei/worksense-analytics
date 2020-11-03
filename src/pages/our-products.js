import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout.js'
import { HeroImage } from '../components/hero-image/hero-image.js'
import { FutureProducts } from '../components/future-products/future-products'
import { PageHeader } from '../components/page-header/page-header.js'

const OurProductsPage = (props) => {
  const productHero = get(props, 'data.contentfulHeroImage')
  const futureProducts = get(props, 'data.contentfulProductSpecs')

  return (
    <Layout location={location}>
      <HeroImage data={productHero} />
        <PageHeader title = {'Our Products Page Placeholder'}></PageHeader>
      <FutureProducts data={futureProducts} />
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
    contentfulProductSpecs(contentful_id: { eq: "1bZxTeFs7XrJzlAhbZWHg2" }) {
      title
      productPreviewImage {
        fluid {
          src
          aspectRatio
        }
      }
      specDescription {
        specDescription
      }
    }
  }
`
