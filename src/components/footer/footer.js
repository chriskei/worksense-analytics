import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Footer,
  RightContainer,
  FooterLink,
  List,
  LeftContainer,
  FooterButtonContainer
} from '../footer/footer.styles.js'
import { RequestDemoButton } from '../request-demo-button/request-demo-button.js'

const PageFooter = (props) => {
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
        <footer role="footer">
          <Footer bg={bg}>
            <LeftContainer>
              <FooterLink to="/">
                <Img
                  alt={data.contentfulLogo.title}
                  fixed={data.contentfulLogo.logoImage.fixed}
                />
              </FooterLink>
              <List>
                <li>
                  <FooterLink to="/">Contact Us</FooterLink>
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
                <RequestDemoButton />
              </FooterButtonContainer>
            </RightContainer>
          </Footer>
        </footer>
      )}
    />
  )
}

export { PageFooter }
