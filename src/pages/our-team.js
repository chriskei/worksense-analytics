import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout/layout.js'
import { colors } from '../assets/colors.js'
import { ContactCard } from '../components/contact-card/contact-card'
import { H1, HeroBody } from '../assets/fonts.js'
import {
  HeadingContainer,
  WavesContainer,
  AllContactCardsContainer
} from '../pages-styles/our-team.styles'
import { OurTeamTopWave } from '../assets/waves.js'

const OurTeamPage = (props) => {
  const ourTeam = get(props, 'data.contentfulOurTeamPage')
  const contactCard = get(props, 'data.contentfulOurTeamPage.contactCard')

  return (
    <Layout bg={
      'linear-gradient(159.9deg, rgba(8, 61, 68, 0.71) -26.6%, #07A3B2 7.66%, #D9ECC7 59.94%)'
    }
    >
      <WavesContainer>
        <OurTeamTopWave></OurTeamTopWave>
      </WavesContainer>
      <HeadingContainer>
        <H1>{ourTeam.ourTeamPageHeader}</H1>
        <HeroBody>{ourTeam.ourTeamPageSubheader}</HeroBody>
      </HeadingContainer>
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
