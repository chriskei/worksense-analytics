import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/layout/layout.js'
import { Hero } from '../components/hero/hero.js'
import { MissionStatement } from '../components/mission-statement/mission-statement'
import { WorkplaceBiases } from '../components/workplace-biases/workplace-biases'
import { ProductSpecs } from '../components/product-specs/product-specs.js'
import { PressRelease } from '../components/press-release/press-release.js'
import { Statistic } from '../components/statistic/statistic.js'
import {
  HeroContainer,
  StatisticsContainer
} from '../pages-styles/index.styles.js'
import { LandingWaveTop, LandingWaveGreen } from '../assets/waves.js'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const workplaceBiasesImage = get(this, 'props.data.contentfulAsset.fluid')
    const textNodes = get(this, 'props.data.allContentfulText.nodes')
    const productFeature = get(this, 'props.data.contentfulProductSpecs')
    const pressRelease = get(this, 'props.data.contentfulPressRelease')
    const heroData = get(this, 'props.data.contentfulHero')
    const stats = get(this, 'props.data.contentfulStatistics')
    const statsHighlights = stats.highlightedNumbers
    const statsDescriptions = stats.descriptions

    return (
      <Layout
        bg={
          'linear-gradient(90deg, rgba(7,163,178,1) 0%, rgba(217,236,199,1) 100%)'
        }
      >
        <div>
          <Helmet title={siteTitle} />
          <HeroContainer>
            <Hero
              header={heroData.header}
              text={heroData.secondaryText.secondaryText}
              imgData={heroData.image}
              backgroundWave={<LandingWaveTop />}
              secondWave={<LandingWaveGreen />}
            />
          </HeroContainer>
          <MissionStatement
            header={textNodes[2].text.text}
            body={textNodes[3].text.text}
          />
          <WorkplaceBiases
            imgData={workplaceBiasesImage}
            header={stats.header}
            body={textNodes[5].text.text}
          />
          <StatisticsContainer>
            {statsHighlights.map((highlight, index) => {
              return (
                <Statistic
                  key={index}
                  highlight={highlight}
                  description={statsDescriptions[index]}
                ></Statistic>
              )
            })}
          </StatisticsContainer>
          <ProductSpecs
            header={textNodes[1].text.text}
            imgData={productFeature.productPreviewImage[0].fluid}
            description={productFeature.specDescription.specDescription}
          />
          <PressRelease
            pressHeader={textNodes[0].text.text}
            pressImg={pressRelease.pressImage.fluid}
            pressText={pressRelease.pressText.pressText}
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
    contentfulHero(contentful_id: { eq: "1tU16dA9FYnz2O11eaCJiN" }) {
      header
      secondaryText {
        secondaryText
      }
      image {
        fluid {
          aspectRatio
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
            "v1VPCeu4WaWIdpM5pmDxc"
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
    contentfulProductSpecs(contentful_id: { eq: "7HwVJlMb3EG03qCpa0HZN3" }) {
      productPreviewImage {
        fluid {
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
    contentfulPressRelease(contentful_id: { eq: "64Mb2Cm6X6mYMbnun7X01l" }) {
      pressImage {
        fluid {
          aspectRatio
          src
        }
      }
      pressText {
        pressText
      }
    }
    contentfulStatistics(contentful_id: { eq: "15TTjYQhffGRdtJgwFpHy2" }) {
      header
      highlightedNumbers
      descriptions
    }
  }
`
