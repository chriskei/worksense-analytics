import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/layout'
import { ContactCard } from '../components/contact-card/contact-card'

const ourTeamPage = ( props ) => {
    //const ourTeamHeader = get(props, 'data.contentfulText.text')
    const contactCard = get(props, 'data.contentfulContactCard')

    return (
        //Insert pageheader component that Maggie created
        <Layout location={location}>
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

export default ourTeamPage

export const pageQuery = graphql`
    query TeamQuery {
        contentfulText(contentful_id: {eq: "ZYJ2HB6gy3qSFZV7JX3lY"}) {
            text {
            text
            }
        }
        contentfulContactCard(contentful_id: {eq: "5zwWeA854HvGSny8Nmec2N"}) {
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
    }
`