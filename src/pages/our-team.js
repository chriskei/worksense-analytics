import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout/layout.js'
import { colors } from '../assets/colors.js'
import { ContactCard } from '../components/contact-card/contact-card'
import { PageHeader } from '../components/page-header/page-header.js'

const OurTeamPage = (props) => {
  const ourTeam = get(props, 'data.contentfulOurTeamPage')
  const contactCard = get(props, 'data.contentfulOurTeamPage.contactCard')

  return (
    <Layout bg={colors.tan}>
      <PageHeader title={ourTeam.ourTeamPageHeader}></PageHeader>
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
    </Layout>
  )
}

export default OurTeamPage

export const pageQuery = graphql`
  query TeamQuery {
    contentfulText(contentful_id: { eq: "ZYJ2HB6gy3qSFZV7JX3lY" }) {
      text {
        text
      }
    }
    contentfulOurTeamPage(contentful_id: { eq: "3a6fX9j2TR2P0N0E96fACj" }) {
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
