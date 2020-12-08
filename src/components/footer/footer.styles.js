import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../assets/colors'
import { H2, P } from '../../assets/fonts'
import { devices } from '../../assets/devices'

const StyledFooter = styled.footer`
  min-height: 23vh;
  width: 100%;
  overflow: hidden;
`

const FooterWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: 0;
`

const FooterContainer = styled.div`
  display: flex;
  height: 700px;
  @media ${devices.mobile} {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media ${devices.tablet} {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`

const LeftContainer = styled.div`
  & * {
    z-index: 1;
  }
  @media ${devices.mobile} {
    padding: 5rem 0 0 0;
    width: 75%;
    margin: auto;
  }
  @media ${devices.tablet} {
    min-width: 50%;
    width: auto;
    padding: 12rem 0 0 8rem;
    margin: 0;
  }
  @media ${devices.laptop} {
    padding: 12rem 0 0 10rem;
  }
  @media ${devices.desktop} {
    padding: 12rem 0 0 15rem;
  }
`

const Lists = styled.div`
  @media ${devices.mobile} {
    display: flex;
  }
  @media ${devices.tablet} {
    display: inline-flex;
  }
`

const FooterLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  width: 80%;
  color: ${colors.darkGreen};
  & > p {
    margin: 0.25rem 0 0.25rem 0;
  }
  & > ${H2} {
    @media ${devices.mobile} {
      margin: 0 0 1rem 0;
      max-width: 90%;
    }
    @media ${devices.tablet} {
      max-width: 95%;
    }
    @media ${devices.laptop} {
      margin: 0 0 2rem 0;
      max-width: 80%;
    }
    @media ${devices.desktop} {
      max-width: 75%;
    }
  }
`

const LeftList = styled.ul`
  padding: 0;
  list-style-type: none;
  @media ${devices.mobile} {
    width: 35vw;
  }
  @media ${devices.tablet} {
    width: 24vw;
  }
  @media ${devices.laptop} {
    width: 19vw;
  }
`

const RightList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const FooterExternalLink = styled.a`
  text-decoration: none;
  & > p {
    margin: 0.25rem 0 0.4rem 0;
  }
`

const RightContainer = styled.div`
  & * {
    z-index: 1;
    position: relative;
  }
  @media ${devices.mobile} {
    padding: 0;
    margin: 0 auto auto auto;
    min-width: 75%;
  }
  @media ${devices.tablet} {
    min-width: 50%;
    padding: 12rem 0 0 0;
    margin: 0;
  }
`

const ScoutTag = styled(P)`
  position: relative;
  @media ${devices.mobile} {
    top: 70px;
  }
  @media ${devices.tablet} {
    top: 130px;
  }
`

export {
  StyledFooter,
  FooterContainer,
  FooterWaveContainer,
  RightContainer,
  FooterLink,
  FooterExternalLink,
  Lists,
  LeftList,
  RightList,
  LeftContainer,
  ScoutTag
}
