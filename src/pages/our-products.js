/*import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout/layout.js'
import { colors } from '../assets/colors.js'
import { SectionHeader } from '../components/section-header/section-header'
import { ProductSpecs } from '../components/product-specs/product-specs'
import { Button } from '../components/button/button'
import {
  ProductsWaveTop,
  ProductsWaveBottom,
  ProductsWaveBackground
} from '../assets/waves'
import { Hero } from '../components/hero/hero'
import {
  HeroContainer,
  ProductSpecsContainer,
  ButtonContainer,
  SectionHeaderContainer
} from '../pages-styles/our-products.styles'

const OurProductsPage = (props) => {
  const ourProducts = get(props, 'data.contentfulOurProductsPage')
  const productPageHeader = ourProducts.pageHeader
  const specs = ourProducts.productSpecsList

  return (
    <Layout>
      <HeroContainer>
        <Hero
          header={productPageHeader}
          backgroundWave={<ProductsWaveBackground />}
          firstWave={<ProductsWaveTop />}
          secondWave={<ProductsWaveBottom />}
        />
      </HeroContainer>
      <SectionHeaderContainer>
        <SectionHeader
          title={ourProducts.productSpecsSectionHeader}
          color={`${colors.darkGreen}`}
        />
      </SectionHeaderContainer>
      <ProductSpecsContainer>
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
      </ProductSpecsContainer>
      <SectionHeaderContainer>
        <SectionHeader
          title={ourProducts.productWalkthroughHeader}
          color={`${colors.darkGreen}`}
        />
      </SectionHeaderContainer>
      <ButtonContainer>
        <Button primary text="Request Demo" />
      </ButtonContainer>
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
*/
