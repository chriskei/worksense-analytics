import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../assets/colors'

const Navigation = styled.div`
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
`

const LogoImg = styled(Img)`
  z-index: 1;
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 1rem 0rem 0rem 3rem;
  z-index: 1;
`

const NavLinkContainer = styled.div`
  display: inline-flex;
  float: right;
  margin: 2rem 3rem 0rem 0rem;
  z-index: 1;
`

const NavButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  color: currentColor;
  text-decoration: none !important;
  z-index: 1;
`

export { Navigation, NavLink, Logo, LogoImg, NavLinkContainer, NavButtonContainer }
