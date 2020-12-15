import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { Layout } from '../components/layout/layout.js'
import { Hero } from '../components/hero/hero.js'
import { MissionStatement } from '../components/mission-statement/mission-statement'
import { Press } from '../components/press/press'
import { H1 } from '../assets/fonts'
import { ProductSpecs } from '../components/product-specs/product-specs'
import {
  LandingWaveContainer,
  ButtonsContainer,
  TalentLifecycleContainer,
  TalentLifecycleHeaderText,
  StagesContainer,
  TalentLifecyclePathContainer,
  ProductsContainer,
  ProductsButtonContainer
} from '../pages-styles/index.styles.js'
import {
  LandingWaveBackground,
  LandingWaveTop,
  LandingWaveGreen,
  TalentLifecyclePath,
  LandingProductsWave,
  LandingBiasWave
} from '../assets/waves.js'
import { colors } from '../assets/colors'
import { Button } from '../components/button/button'
import { FirstStats } from '../components/first-stats/first-stats'
import { Bias } from '../components/bias/bias'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const pageData = get(this, 'props.data.contentfulLandingPage')
    const heroData = pageData.hero
    const mission = pageData.missionStatement
    const firstStats = pageData.firstStatistics
    const talentLifecycle = pageData.talentLifecycle
    const lifecycleStages = talentLifecycle.lifecycleStages
    const {
      biasHeader,
      biasImage,
      largeBody,
      smallBody,
      learnMoreUrl
    } = pageData.bias
    const {
      pressHeader,
      articleImages,
      articleExcerpts,
      articleTitles,
      articleUrLs
    } = pageData.press
    const { header, button } = pageData.smallProducts

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
            <Button color={colors.darkGreen} text="Learn More" />
          </Link>
        </ButtonsContainer>
        <MissionStatement text={mission.text.text} />
        <FirstStats
          images={firstStats.images}
          header={firstStats.header}
          description={firstStats.description}
        />
        <TalentLifecycleContainer>
          <TalentLifecycleHeaderText>
            {talentLifecycle.header}
          </TalentLifecycleHeaderText>
          <StagesContainer>
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
          </StagesContainer>
        </TalentLifecycleContainer>
        <LandingBiasWave />
        <Bias
          biasHeader={biasHeader}
          biasImage={biasImage}
          largeBody={largeBody}
          smallBody={smallBody}
          learnMoreUrl={learnMoreUrl}
        />
        <LandingProductsWave />
        <ProductsContainer>
          <H1 color={colors.darkGreen}>{header}</H1>
          <ProductsButtonContainer>
            <Link to="/our-products/">
              <Button text={button} primary />
            </Link>
          </ProductsButtonContainer>
        </ProductsContainer>
        <Press
          pressHeader={pressHeader}
          articleImages={articleImages}
          articleExcerpts={articleExcerpts}
          articleTitles={articleTitles}
          articleUrls={articleUrLs}
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
    contentfulLandingPage(contentful_id: { eq: "5dUtfY1OleZUZXZfUBuF7Z" }) {
      hero {
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
      missionStatement {
        text {
          text
        }
      }
      firstStatistics {
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
      talentLifecycle {
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
      bias {
        biasHeader
        biasImage {
          fluid {
            sizes
            src
            aspectRatio
          }
        }
        largeBody
        smallBody
        learnMoreUrl
      }
      smallProducts {
        button
        header
      }
      press {
        articleExcerpts
        articleImages {
          fluid {
            sizes
            src
            aspectRatio
          }
        }
        articleTitles
        articleUrLs
        pressHeader
      }
    }
  }
`
