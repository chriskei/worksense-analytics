import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Navigation, NavLink } from './nav-bar.styles.js'

const NavBar = () => {
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
          <Navigation>
            <NavLink to="/">
              <Img
                alt={data.contentfulLogo.title}
                fixed={data.contentfulLogo.logoImage.fixed}
              />
            </NavLink>
            <NavLink to="/our-products/">Our Products</NavLink>
            <NavLink to="/our-team/">Our Team</NavLink>
            <NavLink to="/request-demo/">Request Demo</NavLink>
          </Navigation>
        </nav>
      )}
    />
  )
}

export { NavBar }
