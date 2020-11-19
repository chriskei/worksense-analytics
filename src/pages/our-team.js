import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout/layout.js'
import { ContactCard } from '../components/contact-card/contact-card'
import { Hero } from '../components/hero/hero'
import {
  WavesContainer,
  AllContactCardsContainer
} from '../pages-styles/our-team.styles'
import {
  OurTeamWaveBackground,
  OurTeamWaveTop,
  OurTeamWaveBottom
} from '../assets/waves.js'

const OurTeamPage = (props) => {
  const ourTeam = get(props, 'data.contentfulOurTeamPage')
  const contactCard = get(props, 'data.contentfulOurTeamPage.contactCard')

  return (
    <Layout>
      <WavesContainer>
        <Hero
          header={ourTeam.ourTeamPageHeader}
          text={ourTeam.ourTeamPageSubheader}
          backgroundWave={<OurTeamWaveBackground />}
          firstWave={<OurTeamWaveTop />}
          secondWave={<OurTeamWaveBottom />}
        />
      </WavesContainer>
      <AllContactCardsContainer>
        {contactCard.map((card, index) => {
          return (
            <ContactCard
              key={index}
              picture={card.memberPicture}
              description={card.memberDescription.memberDescription}
              socialMedia={card.socialMediaLinks}
              name={card.name}
              position={card.companyPosition}
              email={card.email}
            />
          )
        })}
      </AllContactCardsContainer>
    </Layout>
  )
}

export default OurTeamPage

export const pageQuery = graphql`
  query TeamQuery {
    contentfulOurTeamPage(contentful_id: { eq: "3a6fX9j2TR2P0N0E96fACj" }) {
      ourTeamPageHeader
      ourTeamPageSubheader
      contactCard {
        id
        name
        companyPosition
        memberPicture {
          fluid {
            src
            aspectRatio
          }
        }
        memberDescription {
          memberDescription
        }
        socialMediaLinks
        email
      }
    }
  }
`
