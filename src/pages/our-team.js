import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout'
import { colors } from '../assets/colors.js'
import { ContactCard } from '../components/contact-card/contact-card'
import { PageHeader } from '../components/page-header/page-header.js'

const OurTeamPage = (props) => {
  const pageHeader = get(props, 'data.contentfulOurTeamPage.ourTeamPageHeader')
  const member1 = {
    image: get(props, 'data.contentfulOurTeamPage.teamMemberPhotos'),
    description: get(
      props,
      'data.contentfulOurTeamPage.member1Description.member1Description'
    ),
    socialMedia: get(props, 'data.contentfulOurTeamPage.socialMedia'),
    name: get(props, 'data.contentfulOurTeamPage.name'),
    position: get(props, 'data.contentfulOurTeamPage.position')
  }
  const member2 = {
    image: get(props, 'data.contentfulOurTeamPage.teamMemberPhotos'),
    description: get(
      props,
      'data.contentfulOurTeamPage.member2Description.member2Description'
    ),
    socialMedia: get(props, 'data.contentfulOurTeamPage.socialMedia'),
    name: get(props, 'data.contentfulOurTeamPage.name'),
    position: get(props, 'data.contentfulOurTeamPage.position')
  }
  const teamMembers = {
    member1,
    member2
  }

  return (
    <Layout bg={colors.tan}>
      <PageHeader title={pageHeader}></PageHeader>
      <ContactCard
        name={contactCard.name}
        position={contactCard.companyPosition}
        picture={contactCard.memberPicture.fluid}
        description={contactCard.memberDescription.memberDescription}
        links={contactCard.socialMediaLinks}
      />
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
    contentfulContactCard(contentful_id: { eq: "5zwWeA854HvGSny8Nmec2N" }) {
      name
      companyPosition
      memberPicture {
        fluid {
          aspectRatio
          src
        }
      }
      memberDescription {
        memberDescription
      }
      socialMediaLinks
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
