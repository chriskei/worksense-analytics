import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = styled.div`
    padding: 0;
    margin: 0;
    height: 20vh;
    max-height: 100px;
    background-color: ${(props) => props.bg};
`
const LeftContainer = styled.div`
    display: inline-flex;
    margin: 2rem 2rem 2rem 10rem;
`

const FooterLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    color: currentColor;
    text-decoration: none;
    font-size: 23px;
`

const List = styled.ul`
    list-style-type: none;
`

const RightContainer = styled.div`
    float: right;
    display: inline-flex;
    margin: 5rem;
`

const FooterButtonContainer = styled.div`
    display: inline-flex;
    align-items: center;
    color: currentColor;
    text-decoration: none !important;
    font-size: 1.25em;
`

export { Footer, RightContainer, FooterLink, List, LeftContainer, FooterButtonContainer }
