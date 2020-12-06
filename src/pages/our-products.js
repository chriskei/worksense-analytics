import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
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
  ProductsWaveContainer,
  ProductHeroContainer,
  ProductPageContainer,
  ButtonContainer,
  ProductVideo
} from '../pages-styles/our-products.styles'

const OurProductsPage = (props) => {
  const ourProducts = get(props, 'data.contentfulOurProductsPage')
  const productPageHeader = ourProducts.pageHeader
  const specs = ourProducts.productSpecsList
  const walkthrough = ourProducts.productWalkthrough

  return (
    <Layout>
      <ProductsWaveContainer>
        <ProductsWaveBackground />
        <ProductsWaveTop />
        <ProductsWaveBottom />
      </ProductsWaveContainer>
      <ProductHeroContainer>
        <Hero header={productPageHeader} />
      </ProductHeroContainer>
      <ProductPageContainer>
        <SectionHeader
          title={ourProducts.productSpecsSectionHeader}
          color={`${colors.darkGreen}`}
        />
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
        <SectionHeader
          title={ourProducts.productWalkthroughHeader}
          color={`${colors.darkGreen}`}
        />
        <ProductVideo controls autoPlay muted loop>
          <source src={walkthrough.file.url} />
        </ProductVideo>
        <ButtonContainer>
          <Link to="/request-demo/">
            <Button primary text="Request Demo" />
          </Link>
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
      productWalkthrough {
        file {
          url
        }
      }
    }
  }
`
