import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout'
import { colors } from '../assets/colors.js'
import { ContactCard } from '../components/contact-card/contact-card'
import { PageHeader } from '../components/page-header/page-header.js'

const OurTeamPage = (props) => {
  const ourTeam = get(props, 'data.contentfulOurTeamPage.contactCard')
  const images = ourTeam.memberPicture
  const descriptions = ourTeam.memberDescription
  const socialMedia = ourTeam.socialMediaLinks
  const names = ourTeam.name
  const positions = ourTeam.companyPosition
  const emails = ourTeam.email

  return (
    <Layout bg={colors.tan}>
      <PageHeader title={ourTeam.ourTeamPageHeader}></PageHeader>
      {images.map((image, index) => {
        return (
          <ContactCard
            key={index}
            picture={image}
            description={descriptions[index]}
            socialMedia={socialMedia[index]}
            name={names[index]}
            position={positions[index]}
            email={emails[index]}
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
