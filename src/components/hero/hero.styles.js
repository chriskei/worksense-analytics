import styled from 'styled-components'
import Img from 'gatsby-image'

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
  @media (min-width: 375px) {
    width: 20rem;
    height: 80vw;
  }
  @media (min-width: 768px) {
    width: 40rem;
    height: 65vw;
  }
  @media (min-width: 1024px) {
    width: 52rem;
    height: 50vw;
  }
  @media (min-width: 1440px) {
    width: 64.375rem;
    height: 42vw;
  }
`

const HeroText = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 375px) {
    min-width: 20rem;
    margin: ${(props) => (props.long == 1 ? '3rem auto auto auto' : 'auto')};
  }
  @media (min-width: 768px) {
    min-width: 26rem;
    padding: ${(props) => (props.long == 1 ? '0 0 22rem 0' : '0')};
  }
  @media (min-width: 1024px) {
    min-width: 34rem;
    padding: ${(props) => (props.long == 1 ? '0 0 15rem 0' : '0')};
  }
  @media (min-width: 1440px) {
    min-width: 41rem;
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
  @media (min-width: 768px) {
    min-width: 16rem;
    display: flex;
  }
  @media (min-width: 1024px) {
    min-width: 22rem;
  }
  @media (min-width: 1440px) {
    min-width: 30rem;
  }
`

export { Waves, HeroContent, HeroText, HeroImage }
