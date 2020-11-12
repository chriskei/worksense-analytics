import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../assets/colors'

const StyledFooter = styled.footer`
  min-height: 23vh;
  background-color: ${colors.lightGreen};
  display: inline-flex;
  width: 100%;
  font-family: 'Manrope', sans-serif;
`
const LeftContainer = styled.div`
  float: left;
  display: inline-flex;
  min-width: 50%;
  justify-content: center;
  align-items: center;
`

const FooterLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.25em;
  color: ${colors.darkGreen};
`

const List = styled.ul`
  list-style-type: none;
`

const RightContainer = styled.div`
  float: right;
  display: inline-flex;
  min-width: 50%;
  justify-content: center;
`

const FooterButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  color: currentColor;
  text-decoration: none !important;
  font-size: 1.25em;
`

export {
  StyledFooter,
  RightContainer,
  FooterLink,
  List,
  LeftContainer,
  FooterButtonContainer
}
