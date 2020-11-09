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
  const sectionHeader = get(
    props,
    'data.contentfulOurProductsPage.productSpecsSectionHeader'
  )
  const productSpecs1 = {
    header: get(props, 'data.contentfulOurProductsPage.productSpecHeader1'),
    description: get(
      props,
      'data.contentfulOurProductsPage.productSpecDescription1.productSpecDescription1'
    ),
    imgData: get(props, 'data.contentfulOurProductsPage.productImage1')
  }
  const productSpecs2 = {
    header: get(props, 'data.contentfulOurProductsPage.productSpecHeader2'),
    description: get(
      props,
      'data.contentfulOurProductsPage.productSpecDescription2.productSpecDescription2'
    ),
    imgData: get(props, 'data.contentfulOurProductsPage.productImage2')
  }
  const productSpecs3 = {
    header: get(props, 'data.contentfulOurProductsPage.productSpecHeader3'),
    description: get(
      props,
      'data.contentfulOurProductsPage.productSpecDescription3.productSpecDescription3'
    ),
    imgData: get(props, 'data.contentfulOurProductsPage.productImage3')
  }
  const productSpecs4 = {
    header: get(props, 'data.contentfulOurProductsPage.productSpecHeader4'),
    description: get(
      props,
      'data.contentfulOurProductsPage.productSpecDescription4.productSpecDescription4'
    ),
    imgData: get(props, 'data.contentfulOurProductsPage.productImage4')
  }
  const productSpecs = [
    productSpecs1,
    productSpecs2,
    productSpecs3,
    productSpecs4
  ]
  const walkthroughHeader = get(
    props,
    'data.contentfulOurProductsPage.productWalkthroughHeader'
  )

  return (
    <Layout bg={colors.tan}>
      <HeroImage imgData={productPageHero} />
      <PageHeader title={sectionHeader}></PageHeader>
      {productSpecs.map((productSpec, index) => {
        return (
          <ProductSpecs
            key={index}
            header={productSpec.header}
            description={productSpec.description}
            imgData={productSpec.imgData}
            reversed={index % 2 == 0}
          ></ProductSpecs>
        )
      })}
      <h1>{walkthroughHeader}</h1>
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
      productSpecHeader1
      productSpecDescription1 {
        productSpecDescription1
      }
      productImage1 {
        title
        fluid {
          aspectRatio
          src
        }
      }
      productSpecHeader2
      productSpecDescription2 {
        productSpecDescription2
      }
      productImage2 {
        title
        fluid {
          aspectRatio
          src
        }
      }
      productSpecHeader3
      productSpecDescription3 {
        productSpecDescription3
      }
      productImage3 {
        title
        fluid {
          aspectRatio
          src
        }
      }
      productSpecHeader4
      productSpecDescription4 {
        productSpecDescription4
      }
      productImage4 {
        title
        fluid {
          aspectRatio
          src
        }
      }
      productWalkthroughHeader
    }
  }
`
