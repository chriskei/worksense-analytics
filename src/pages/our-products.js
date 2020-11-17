import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout/layout.js'
import { HeroImage } from '../components/hero-image/hero-image'
import { colors } from '../assets/colors.js'
import { SectionHeader } from '../components/section-header/section-header'
import { ProductSpecs } from '../components/product-specs/product-specs'
import { RequestDemoButton } from '../components/request-demo-button/request-demo-button'
import {
  ProductsWaveTop,
  ProductsWaveBottom,
  ProductsWaveBackground
} from '../assets/waves'
import { Hero } from '../components/hero/hero'
import {
  ProductSpecsContainer,
  ButtonContainer
} from '../pages-styles/our-products.styles'

const OurProductsPage = (props) => {
  const ourProducts = get(props, 'data.contentfulOurProductsPage')
  const productPageHeader = ourProducts.pageHeader
  const headers = ourProducts.productSpecsHeaders
  const images = ourProducts.productSpecsImages
  const descriptions = [
    ourProducts.productSpecDescription1.productSpecDescription1,
    ourProducts.productSpecDescription2.productSpecDescription2,
    ourProducts.productSpecDescription3.productSpecDescription3,
    ourProducts.productSpecDescription4.productSpecDescription4
  ]

  return (
    <Layout
      bg={
        'linear-gradient(90deg, rgba(7,163,178,1) 0%, rgba(217,236,199,1) 100%)'
      }
    >
      <Hero
        header={productPageHeader}
        BackgroundWave={ProductsWaveBackground}
        FirstWave={ProductsWaveTop}
        SecondWave={ProductsWaveBottom}
        firstWavePosn={'-48vw'}
        secondWavePosn={'-72.2vw'}
        bg={`${colors.tan}`}
        height={'45vw'}
      />
      <SectionHeader
        title={ourProducts.productSpecsSectionHeader}
        color={`${colors.darkGreen}`}
      />
      <ProductSpecsContainer>
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
      </ProductSpecsContainer>
      <SectionHeader
        title={ourProducts.productWalkthroughHeader}
        color={`${colors.darkGreen}`}
      />
      <ButtonContainer>
        <RequestDemoButton />
      </ButtonContainer>
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
      pageHeader
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
