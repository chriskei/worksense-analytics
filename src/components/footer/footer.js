import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  StyledFooter,
  RightContainer,
  FooterLink,
  List,
  LeftContainer,
  FooterButtonContainer
} from '../footer/footer.styles.js'
import { Button } from '../button/button'

const Footer = () => {
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
        <StyledFooter role="footer">
          <LeftContainer>
            <FooterLink to="/">
              <Img
                alt={data.contentfulLogo.title}
                fixed={data.contentfulLogo.logoImage.fixed}
              />
            </FooterLink>
            <List>
              <li>
                <FooterLink to="/request-demo/">Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/our-products/">Products</FooterLink>
              </li>
              <li>
                <FooterLink to="/">Documentation</FooterLink>
              </li>
            </List>
          </LeftContainer>
          <RightContainer>
            <FooterButtonContainer>
              <Button primary text="Contact Us" />
            </FooterButtonContainer>
          </RightContainer>
        </StyledFooter>
      )}
    />
  )
}

export { Footer }
