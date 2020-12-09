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
  margin: auto;
  @media ${devices.mobile} {
    height: 400px;
    width: 90%;
  }
  @media ${devices.tablet} {
    height: 600px;
    width: 100%;
  }
`

const LeftContainer = styled.div`
  & * {
    z-index: 1;
  }
  @media ${devices.mobile} {
    padding: 2rem 0 0 0;
    width: 55%;
    margin: auto;
  }
  @media ${devices.tablet} {
    min-width: 50%;
    width: auto;
    padding: 10rem 0 0 8rem;
    margin: 0;
  }
  @media ${devices.laptop} {
    padding: 10rem 0 0 12rem;
  }
  @media ${devices.desktop} {
    padding: 10rem 0 0 15rem;
  }
`

const Lists = styled.div`
  display: flex;
  @media ${devices.mobile} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    flex-direction: row;
  }
`

const FooterLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.darkGreen};
  @media ${devices.mobile} {
    width: 300px;
  }
  @media ${devices.tablet} {
    width: 80%;
  }
  & > p {
    margin: 0.25rem 0 0.25rem 0;
  }
  & > ${H2} {
    @media ${devices.mobile} {
      margin: 0 0 1rem 0;
      max-width: 95%;
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
  &:hover {
    & > ${P} {
      color: ${colors.tan};
      transition: 200ms;
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
  display: flex;
  @media ${devices.mobile} {
    flex-direction: row;
  }
  @media ${devices.tablet} {
    flex-direction: column;
  }
`

const FooterExternalLink = styled.a`
  text-decoration: none;
  & > p {
    margin: 0.25rem 0 0.25rem 0;
    @media ${devices.mobile} {
      display: none;
    }
    @media ${devices.tablet} {
      display: block;
    }
  }
  & > svg {
    @media ${devices.mobile} {
      display: block;
      padding: 0 2rem 0 0;
    }
    @media ${devices.tablet} {
      display: none;
    }
  }
  @media ${devices.mobile} {
    display: inline-block;
  }
  @media ${devices.tablet} {
    display: block;
  }

  &:hover {
    & > p {
      color: ${colors.tan};
      transition: 200ms;
    }
  }
`

const RightContainer = styled.div`
  & * {
    z-index: 1;
    position: relative;
  }
  margin: 0;
  @media ${devices.mobile} {
    padding: 0;
    min-width: 12%;
    position: relative;
    top: 90px;
    padding: 5.5rem 0 0 0;
  }
  @media ${devices.tablet} {
    min-width: 50%;
    top: 0;
    padding: 10rem 0 0 0;
  }
`

const ScoutTag = styled(P)`
  position: relative;
  @media ${devices.mobile} {
    top: 20px;
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
