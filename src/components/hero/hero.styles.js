import styled from 'styled-components'
import Img from 'gatsby-image'
import { devices } from '../../assets/devices'

const Waves = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
`

const HeroContent = styled.div`
  display: flex;
  margin: auto;
  > * {
    z-index: 1;
  }
  @media ${devices.mobile} {
    width: 20rem;
    height: 80vw;
  }
  @media ${devices.tablet} {
    width: 40rem;
    height: 65vw;
  }
  @media ${devices.laptop} {
    width: 52rem;
    height: 50vw;
  }
  @media ${devices.desktop} {
    width: 80rem;
    height: 42vw;
  }
`

const HeroText = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  @media ${devices.mobile} {
    min-width: 20rem;
    margin: ${(props) => (props.long ? '3rem auto auto auto' : 'auto')};
  }
  @media ${devices.tablet} {
    min-width: 26rem;
    padding: ${(props) => (props.long ? '0 0 22rem 0' : '0')};
  }
  @media ${devices.laptop} {
    min-width: 34rem;
    padding: ${(props) => (props.long ? '0 0 15rem 0' : '0')};
  }
  @media ${devices.desktop} {
    min-width: 41rem;
    padding: ${(props) => (props.long ? '5rem 0 0 0' : '0')};
  }
`

const HeroImage = styled(Img)`
  display: none;
  overflow: visible !important;
  & > picture {
    & > img {
      padding: 10rem 0 0 0;
      height: auto !important;
    }
  }
  @media ${devices.tablet} {
    min-width: 16rem;
    display: flex;
  }
  @media ${devices.laptop} {
    min-width: 22rem;
  }
  @media ${devices.desktop}  {
    min-width: 30rem;
  }
`

export { Waves, HeroContent, HeroText, HeroImage }
