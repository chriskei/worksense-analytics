import React from 'react'
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
  const headers = ourProducts.productSpecsHeaders
  const images = ourProducts.productSpecsImages
  const descriptions = [
    ourProducts.productSpecDescription1.productSpecDescription1,
    ourProducts.productSpecDescription2.productSpecDescription2,
    ourProducts.productSpecDescription3.productSpecDescription3,
    ourProducts.productSpecDescription4.productSpecDescription4
  ]

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
