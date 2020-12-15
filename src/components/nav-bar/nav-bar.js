import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Navigation,
  Logo,
  LogoImg,
  LargeLogo,
  SmallLogo,
  NavLink,
  LargeNavLinkContainer,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer
} from './nav-bar.styles.js'
import { Button } from '../button/button'
import { Hamburger, Cross } from '../../assets/icons'
import { animations } from '../../assets/animations'

const NavBar = (props) => {
  const { bg } = props
  const [smallLinks, setSmallLinks] = useState(false)
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        setDelay(false)
        setSmallLinks(false)
      }, animations.navBarFadeLength * 1000)
      return () => clearInterval(interval)
    }
  }, [delay])

  return (
    <StaticQuery
      query={graphql`
        {
          contentfulLogo(contentful_id: { eq: "3hnpJSkwyNGp6Vz23qHuIn" }) {
            id
            title
            logoImage {
              fixed(height: 80) {
                aspectRatio
                src
                width
                height
              }
            }
            largeLogoImage {
              fixed(height: 80) {
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
            <LargeLogo>
              <LogoImg
                alt={data.contentfulLogo.title}
                fixed={data.contentfulLogo.largeLogoImage.fixed}
              />
            </LargeLogo>
            <SmallLogo>
              <LogoImg
                alt={data.contentfulLogo.title}
                fixed={data.contentfulLogo.logoImage.fixed}
              />
            </SmallLogo>
          </Logo>
          <LargeNavLinkContainer>
            <NavLink to="/our-products/">Our Products</NavLink>
            <NavLink to="/our-team/">Our Team</NavLink>
            <NavLink to="/request-demo/">
              <Button primary text="Request Demo" />
            </NavLink>
          </LargeNavLinkContainer>
          <SmallNavLinkContainer onClick={() => setSmallLinks(true)}>
            <Hamburger />
          </SmallNavLinkContainer>
          {smallLinks && (
            <SmallMenuContainer out={delay}>
              <CrossContainer onClick={() => setDelay(true)}>
                <Cross />
              </CrossContainer>
              <SmallLinksContainer>
                <NavLink to="/our-products/">Our Products</NavLink>
                <NavLink to="/our-team/">Our Team</NavLink>
                <NavLink to="/request-demo/">Request Demo</NavLink>
              </SmallLinksContainer>
            </SmallMenuContainer>
          )}
        </Navigation>
      )}
    />
  )
}

export { NavBar }
