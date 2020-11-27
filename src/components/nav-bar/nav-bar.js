import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Navigation,
  Logo,
  LogoImg,
  NavLink,
  NavLinkContainer
} from './nav-bar.styles.js'
import { Button } from '../button/button'

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
        <Navigation bg={bg} role="navigation">
          <Logo to="/">
            <LogoImg
              alt={data.contentfulLogo.title}
              fixed={data.contentfulLogo.logoImage.fixed}
            />
          </Logo>
          <NavLinkContainer>
            <NavLink to="/our-products/">Our Products</NavLink>
            <NavLink to="/our-team/">Our Team</NavLink>
            <NavLink to="/request-demo/">
              <Button primary text="Request Demo"/>
            </NavLink>
          </NavLinkContainer>
        </Navigation>
      )}
    />
  )
}

export { NavBar }
