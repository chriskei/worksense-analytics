import styled from 'styled-components'
import { Link } from 'gatsby'

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 100px;
  font-size: 1.25em;
`

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  color: currentColor;
  text-decoration: none;
`

const NavButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  color: currentColor;
  text-decoration: none !important;
`

export { Navigation, NavLink, NavButtonContainer }
