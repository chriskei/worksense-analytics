import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout.js'
import { HeroImage } from '../components/hero-image/hero-image'
import { colors } from '../assets/colors.js'
import { PageHeader } from '../components/page-header/page-header'
import { ProductSpecs } from '../components/product-specs/product-specs'

const OurProductsPage = (props) => {
  const productPageHero = get(props, 'data.contentfulHeroImage')
  const ourProducts = get(props, 'data.contentfulOurProductsPage')
  const headers = ourProducts.productSpecsHeaders
  const images = ourProducts.productSpecsImages
  const descriptions = [
    ourProducts.productSpecDescription1.productSpecDescription1,
    ourProducts.productSpecDescription2.productSpecDescription2,
    ourProducts.productSpecDescription3.productSpecDescription3,
    ourProducts.productSpecDescription4.productSpecDescription4
  ]

  return (
    <Layout bg={colors.tan}>
      <HeroImage imgData={productPageHero} />
      <PageHeader title={ourProducts.productSpecsSectionHeader} />
      {headers.map((header, index) => {
        return (
          <ProductSpecs
            key={index}
            header={header}
            description={descriptions[index]}
            imgData={images[index]}
            reversed={index % 2 == 0}
          />
        )
      })}
      <h1>{ourProducts.productWalkthroughHeader}</h1>
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
    contentfulOurProductsPage {
      heroImage {
        id
        title
        fluid {
          src
        }
      }
      productSpecsSectionHeader
      productSpecsHeaders
      productSpecsImages {
        title
        fluid {
          src
          aspectRatio
        }
      }
      productSpecDescription1 {
        productSpecDescription1
      }
      productSpecDescription2 {
        productSpecDescription2
      }
      productSpecDescription3 {
        productSpecDescription3
      }
      productSpecDescription4 {
        productSpecDescription4
      }
      productWalkthroughHeader
    }
  }
`
