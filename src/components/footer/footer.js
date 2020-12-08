import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import {
  StyledFooter,
  FooterWaveContainer,
  FooterContainer,
  RightContainer,
  FooterExternalLink,
  FooterLink,
  Lists,
  LeftList,
  RightList,
  LeftContainer,
  ScoutTag
} from '../footer/footer.styles.js'
import { Button } from '../button/button'
import { H2, P } from '../../assets/fonts'
import { colors } from '../../assets/colors'
import { FooterWaveBackground, FooterWaveTop, FooterWaveBottom } from '../../assets/waves.js'

const Footer = () => {
  return (
        <StyledFooter role="footer">
          <FooterWaveContainer>
            <FooterWaveBackground />
            <FooterWaveTop />
            <FooterWaveBottom />
          </FooterWaveContainer>
          <FooterContainer>
            <LeftContainer>
              <FooterLink to="/">
                <H2 color={colors.tan}>Empowering people leaders</H2>
              </FooterLink>
              <Lists>
                <LeftList>
                  <li>
                    <FooterLink to="/our-products/">
                      <P>Products</P>
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/our-team/">
                      <P>Our Team</P>
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/request-demo/">
                      <P>Request Demo</P>
                    </FooterLink>
                  </li>
                </LeftList>
                <RightList>
                  <li>
                    <FooterExternalLink
                      href="https://twitter.com/work_sense"
                      target="_blank"
                      rel="noopener"
                    >
                      <P>Twitter</P>
                    </FooterExternalLink>
                  </li>
                  <li>
                    <FooterExternalLink
                      href="https://www.linkedin.com/company/worksenseanalytics/"
                      target="_blank"
                      rel="noopener"
                    >
                      <P>LinkedIn</P>
                    </FooterExternalLink>
                  </li>
                </RightList>
              </Lists>
            </LeftContainer>
            <RightContainer>
              <P>Got a question?</P>
              <Link to="/request-demo/">
                <Button primary text="Contact Us" />
              </Link>
              <ScoutTag>Made with love by Scout</ScoutTag>
            </RightContainer>
          </FooterContainer>
        </StyledFooter>
  )
}

export { Footer }
