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
    const textNodes = get(this, 'props.data.allContentfulText.nodes')
    const heroData = get(this, 'props.data.contentfulHero')
    const firstStats = get(this, 'props.data.contentfulStats')
    const talentLifecycle = get(this, 'props.data.contentfulTalentLifecycle')
    const lifecycleStages = talentLifecycle.lifecycleStages
    const { biasHeader, biasImage, largeBody, smallBody, learnMoreUrl } = get(
      this,
      'props.data.contentfulBias'
    )
    const {
      pressHeader,
      articleImages,
      articleExcerpts,
      articleTitles,
      articleUrLs
    } = get(this, 'props.data.contentfulPress')
    const { header, button } = get(this, 'props.data.contentfulSmallProducts')

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
        <MissionStatement text={textNodes[0].text.text} />
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
    contentfulProductSpecs(contentful_id: { eq: "7HwVJlMb3EG03qCpa0HZN3" }) {
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
    contentfulBias {
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
    contentfulPress(contentful_id: { eq: "78QNMvTwaklGvUvTzJBZvg" }) {
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
    contentfulSmallProducts(contentful_id: { eq: "5P0oBlBPiPvXrtrF2sHBlG" }) {
      button
      header
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
