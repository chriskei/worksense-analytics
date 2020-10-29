import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/layout.js'
import { HeroImage } from '../components/HeroImage/heroImage.js'
import ArticlePreview from '../components/article-preview'
import { MissionStatement } from '../components/mission-statement/mission-statement'
import { WorkplaceBiases } from '../components/workplace-biases/workplace-biases'
import { ProductSpecs } from '../components/product-specs/productSpecs.js'
import { Testimonials } from '../components/testimonials/testimonials.js'


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const heroImage = get(this, 'props.data.contentfulHeroImage')
    const workplaceBiasesImage = get(this, 'props.data.contentfulAsset.fluid')
    const textNodes = get(this, 'props.data.allContentfulText.nodes')
    const productFeature = get(this, 'props.data.contentfulProductSpecs');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <HeroImage data={heroImage} />
          <MissionStatement
            header={textNodes[3].text.text}
            body={textNodes[4].text.text}
          />
          <WorkplaceBiases
            imgData={workplaceBiasesImage}
            header={textNodes[5].text.text}
            body={textNodes[6].text.text}
          />
          <ProductSpecs 
            productHeader = {textNodes[0].text.text}
            productImg={productFeature.productPreviewImage.fluid}
            productDescription={productFeature.specDescription.specDescription}
          />
          <Testimonials 
            testHeader = {textNodes[2].text.text}
            testBody = {textNodes[1].text.text}
          />
        </div>
      </Layout>
    )
  }
}

export default RootIndex 

export const pageQuery = graphql`
  query HomeQuery {
      site {
        siteMetadata {
          title
        }
      }
      contentfulHeroImage(contentful_id: {eq: "16nJKq9QmPQ1Mgn7jnaAmg"}) {
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
    contentfulAsset(contentful_id: { eq: "3tfuyKj6fbYPO0dFuphBAO" }) {
      fluid {
        aspectRatio
        src
        sizes
        srcSet
      }
    }
    allContentfulText(
      filter: {
        contentful_id: {
          in: [
            "4h3STN4dSDWuKkpmjOXskp"
            "7ACUCUJzqiq7ivtRA7BOJv"
            "1T9C8FZgiv01te3bLaw3BS"
            "1lwPdXfrVB7f3qTLBkDOEn"
            "4Jzc5NlkyQb1Q0EOvCZEww"
            "3uMgGxmfbdUp6kbhIWNur6"  
            "19Zz0RUKpy1FQULSR783EM"
          ]
        }
      }
    ) {
      nodes {
        text {
          text
        }
      }
    }
    contentfulProductSpecs(contentful_id: {eq: "7HwVJlMb3EG03qCpa0HZN3"}) {
      productPreviewImage {
        fluid(maxHeight: 500, maxWidth: 500) {
          sizes
          aspectRatio
          src
          srcSet
        }
        contentful_id
      }
      specDescription {
        specDescription
      }
    }
  }
`