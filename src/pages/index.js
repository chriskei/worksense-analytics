import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { Layout } from '../components/layout/layout.js'
import { Hero } from '../components/hero/hero.js'
import { MissionStatement } from '../components/mission-statement/mission-statement'
import { WorkplaceBiases } from '../components/workplace-biases/workplace-biases'
import { ProductSpecs } from '../components/product-specs/product-specs.js'
import { PressRelease } from '../components/press-release/press-release.js'
import { Statistic } from '../components/statistic/statistic.js'
import { Button } from '../components/button/button'
import { FirstStats } from '../components/first-stats/first-stats'
import {
  LandingWaveContainer,
  ButtonsContainer,
  StatisticsContainer,
  TalentLifecycleHeaderText,
  TalentLifecycleContainer,
  TalentLifecyclePathContainer
} from '../pages-styles/index.styles.js'
import {
  LandingWaveBackground,
  LandingWaveTop,
  LandingWaveGreen,
  TalentLifecyclePath
} from '../assets/waves.js'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const workplaceBiasesImage = get(this, 'props.data.contentfulAsset.fluid')
    const textNodes = get(this, 'props.data.allContentfulText.nodes')
    const pressRelease = get(this, 'props.data.contentfulPressRelease')
    const heroData = get(this, 'props.data.contentfulHero')
    const stats = get(this, 'props.data.contentfulStatistics')
    const statsHighlights = stats.highlightedNumbers
    const statsDescriptions = stats.descriptions
    const firstStats = get(this, 'props.data.contentfulStats')
    const talentLifecycle = get(this, 'props.data.contentfulTalentLifecycle')
    const lifecycleStages = talentLifecycle.lifecycleStages

    return (
      <Layout>
        <LandingWaveContainer>
          <LandingWaveBackground />
          <LandingWaveTop />
          <LandingWaveGreen />
        </LandingWaveContainer>
        <Helmet title={siteTitle} />
        <Hero
          header={heroData.header}
          text={heroData.secondaryText.secondaryText}
          imgData={heroData.image}
        />
        <ButtonsContainer>
          <Link to="/request-demo/">
            <Button primary text="Request Demo" />
          </Link>
          <Link to="/our-products/">
            <Button text="Learn More" />
          </Link>
        </ButtonsContainer>
        <MissionStatement text={textNodes[0].text.text} />
        <FirstStats
          images={firstStats.images}
          header={firstStats.header}
          description={firstStats.description}
        />
        <TalentLifecycleHeaderText>
          {talentLifecycle.header}
        </TalentLifecycleHeaderText>
        <TalentLifecycleContainer>
          <TalentLifecyclePathContainer>
            <TalentLifecyclePath />
          </TalentLifecyclePathContainer>
          {lifecycleStages.map((stage, index) => {
            return (
              <ProductSpecs
                key={index}
                header={stage.title}
                description={stage.specDescription.specDescription}
                imgData={stage.productImage}
                reversed={index % 2 == 0}
              />
            )
          })}
        </TalentLifecycleContainer>
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
        <WorkplaceBiases
          imgData={workplaceBiasesImage}
          header={stats.header}
          body={textNodes[5].text.text}
        />
        <PressRelease
          pressHeader={textNodes[0].text.text}
          pressImg={pressRelease.pressImage.fluid}
          pressText={pressRelease.pressText.pressText}
        />
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
          sizes
          srcSet
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
    contentfulStats(contentful_id: { eq: "69XcYs1lBwiqxP1UqZXLgB" }) {
      id
      images {
        fluid {
          src
          sizes
          aspectRatio
        }
      }
      header
      description
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
    contentfulTalentLifecycle(contentful_id: { eq: "3ig7cPwCbDY350SaJ7Bye1" }) {
      header
      lifecycleStages {
        title
        specDescription {
          specDescription
        }
        productImage {
          fluid {
            aspectRatio
            src
          }
        }
      }
    }
  }
`
