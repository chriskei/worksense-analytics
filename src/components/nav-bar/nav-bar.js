import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Navigation, Logo, NavLink, NavLinkContainer, NavButtonContainer } from './nav-bar.styles.js'
import { RequestDemoButton } from '../request-demo-button/request-demo-button.js'

const NavBar = (props) => {
  const { bg } = props
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulLogo(contentful_id: { eq: "3hnpJSkwyNGp6Vz23qHuIn" }) {
            id
            title
            logoImage {
              fixed(height: 100, width: 100) {
                aspectRatio
                src
                width
                height
              }
            }
          }
        }
      `}
      render={(data) => (
        <nav role="navigation">
          <Navigation bg={bg}>
            <Logo to="/">
              <Img
                alt={data.contentfulLogo.title}
                fixed={data.contentfulLogo.logoImage.fixed}
              />
            </Logo>
          <NavLinkContainer>
            <NavLink to="/our-products/">Our Products</NavLink>
            <NavLink to="/our-team/">Our Team</NavLink>
            <NavButtonContainer>
              <RequestDemoButton />
            </NavButtonContainer>
          </NavLinkContainer>
          </Navigation>
        </nav>
      )}
    />
  )
}

export { NavBar }
