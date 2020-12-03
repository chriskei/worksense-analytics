import styled from 'styled-components'
import { devices } from '../../assets/devices'

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media ${devices.mobile} {
    margin: 4rem;
    width: 20rem;
    margin-left: calc(50% - 10rem);
  }
  @media ${devices.tablet} {
    margin: 2rem;
    width: 40rem;
    margin-left: calc(50% - 20rem);
  }
  @media ${devices.laptop} {
    margin-left: ${(props) =>
      props.first ? 'calc(50% - 24rem)' : 'calc(50% - 14rem)'};
  }
  @media ${devices.desktop} {
    width: 45vw;
    margin-left: ${(props) =>
      props.first ? 'calc(50% - 30vw)' : 'calc(50% - 15vw)'};
  }
`

const LogoContainer = styled.div`
  > * {
    border-radius: 5px;
  }
  @media ${devices.mobile} {
    min-width: 6rem;
    min-height: 6rem;
  }
  @media ${devices.tablet} {
    min-width: 8rem;
    min-height: 8rem;
  }
  @media ${devices.laptop} {
    min-width: 10rem;
    min-height: 10rem;
  }
  @media ${devices.desktop} {
    min-width: 12rem;
    min-height: 12rem;
  }
`

const TextContainer = styled.div`
  > * {
    margin: auto;
  }
  align-self: flex-end;
  @media ${devices.mobile} {
    margin-left: 1rem;
  }
  @media ${devices.laptop} {
    margin-left: 1.5rem;
  }
`

const LinkText = styled.a`
  text-decoration: none;
`

export { ArticleContainer, LogoContainer, TextContainer, LinkText }
