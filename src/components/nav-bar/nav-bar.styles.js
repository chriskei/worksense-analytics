import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../assets/colors'
import { devices } from '../../assets/devices'
import { animations } from '../../assets/animations'

const Navigation = styled.nav`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 100px;
  font-size: 1.25em;
  background: ${(props) => props.bg};
`

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  color: ${colors.darkGreen};
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-weight: bold;
  z-index: 1;
  & > button {
    padding: 12px 18px 12px 18px;
  }

  &:hover {
    color: ${colors.blue};
    transition: 200ms;
  }
`

const LogoImg = styled(Img)`
  z-index: 1;
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 1.4rem 0rem 0rem 1.5rem;
  z-index: 1;
  @media ${devices.tablet} {
    margin-left: 3rem;
  }
`

const SmallLogo = styled.div`
  display: block;
  @media ${devices.laptop} {
    display: none;
  }
`

const LargeLogo = styled.div`
  display: none;
  @media ${devices.laptop} {
    display: block;
  }
`

const LargeNavLinkContainer = styled.div`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: inline-flex;
    float: right;
    margin: 2.65rem 2.65rem 0rem 0rem;
    z-index: 1;
  }
`

const SmallNavLinkContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobile} {
    position: relative;
    display: inline-flex;
    float: right;
    margin: 3.25rem 1.5rem 0rem 0rem;
    z-index: 1;
  }
  @media ${devices.tablet} {
    display: none;
  }
`

const fadeIn = keyframes`
  0% { opacity: 0%; }
  100% { opacity: 100%; }
`

const fadeOut = keyframes`
  0% { opacity: 100%; }
  100% { opacity: 0%; }
`

const SmallMenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  background: ${colors.tan};
  top: 1rem;
  right: 1rem;
  border: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${colors.darkGreen};
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  animation: ${(props) => (props.out ? fadeOut : fadeIn)}
    ${animations.navBarFadeLength}s 1;
  @media ${devices.laptop} {
    display: none;
  }
`

const SmallLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem 0;
  > * {
    margin: 1rem;
  }
`

const CrossContainer = styled.div`
  position: relative;
  margin: 0.4rem auto auto 85%;
  &:hover {
    cursor: pointer;
  }
`

export {
  Navigation,
  NavLink,
  Logo,
  LogoImg,
  SmallLogo,
  LargeLogo,
  LargeNavLinkContainer,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer
}
