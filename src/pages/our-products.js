import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout/layout.js'
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
  ProductsWaveContainer,
  ProductPageContainer,
  ButtonContainer,
  SectionHeaderContainer
} from '../pages-styles/our-products.styles'

const OurProductsPage = (props) => {
  const ourProducts = get(props, 'data.contentfulOurProductsPage')
  const productPageHeader = ourProducts.pageHeader
  const specs = ourProducts.productSpecsList
  // const images = ourProducts.productSpecsImages
  // const descriptions = [
  //   ourProducts.productSpecDescription1.productSpecDescription1,
  //   ourProducts.productSpecDescription2.productSpecDescription2,
  //   ourProducts.productSpecDescription3.productSpecDescription3,
  //   ourProducts.productSpecDescription4.productSpecDescription4
  // ]

  return (
    <Layout>
      <ProductsWaveContainer>
        <ProductsWaveBackground />
        <ProductsWaveTop />
        <ProductsWaveBottom />
      </ProductsWaveContainer>
      <Hero header={productPageHeader} />
      <ProductPageContainer>
        <SectionHeaderContainer>
          <SectionHeader
            title={ourProducts.productSpecsSectionHeader}
            color={`${colors.darkGreen}`}
          />
        </SectionHeaderContainer>
        {specs.map((spec, index) => {
          return (
            <ProductSpecs
              key={index}
              header={spec.title}
              description={spec.specDescription.specDescription}
              imgData={spec.productImage}
              reversed={index % 2 == 0}
            />
          )
        })}
        <SectionHeaderContainer>
          <SectionHeader
            title={ourProducts.productWalkthroughHeader}
            color={`${colors.darkGreen}`}
          />
        </SectionHeaderContainer>
        <ButtonContainer>
          <RequestDemoButton />
        </ButtonContainer>
      </ProductPageContainer>
    </Layout>
  )
}

export default OurProductsPage

export const pageQuery = graphql`
  query ProductsQuery {
    contentfulOurProductsPage(contentful_id: { eq: "4H4t78Y35BJK9AomXN8t0S" }) {
      pageHeader
      productSpecsSectionHeader
      productSpecsList {
        title
        specDescription {
          specDescription
        }
        productImage {
          fluid {
            src
            aspectRatio
            sizes
          }
        }
      }
      productWalkthroughHeader
    }
  }
`
