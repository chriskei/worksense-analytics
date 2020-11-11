import styled from 'styled-components'
import { Link } from 'gatsby'

const Navigation = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 100px;
  font-size: 1.25em;
  background-color: ${(props) => props.bg};
`

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  color: #083D44;
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-weight: bold;
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 1rem 0rem 0rem 3rem;
`

const NavLinkContainer = styled.div`
  display: inline-flex;
  float: right;
  margin: 2rem 3rem 0rem 0rem;
`

const NavButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  color: currentColor;
  text-decoration: none !important;
`

export { Navigation, NavLink, Logo, NavLinkContainer, NavButtonContainer }
