import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout'
import { colors } from '../assets/colors.js'
import { ContactCard } from '../components/contact-card/contact-card'
import { PageHeader } from '../components/page-header/page-header.js'

const OurTeamPage = (props) => {
  const ourTeam = get(props, 'data.contentfulOurTeamPage')
  const images = ourTeam.teamMemberPhotos
  const descriptions = [
    ourTeam.member1Description.member1Description,
    ourTeam.member2Description.member2Description,
    ourTeam.member3Description.member3Description,
    ourTeam.member4Description.member4Description
  ]
  const socialMedia = ourTeam.socialMedia
  const names = ourTeam.name
  const positions = ourTeam.position

  return (
    <Layout bg={colors.tan}>
      {images.length > 0 &&
      positions.length > 0 && 
      images.length > 0 &&
      descriptions.length > 0 &&
      socialMedia.length > 0 && 
      names.length == positions.length &&
      positions.length == images.length &&
      images.length == descriptions.length &&
      descriptions.length == socialMedia.length && (
      <>
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
          />
        )
      })}
      </>
      )}
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
      ourTeamPageHeader
      teamMemberPhotos {
        fluid {
          aspectRatio
          src
        }
      }
      member1Description {
        member1Description
      }
      member2Description {
        member2Description
      }
      member3Description {
        member3Description
      }
      member4Description {
        member4Description
      }
      socialMedia
      name
      position
    }
  }
`
