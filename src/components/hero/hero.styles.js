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
    height: 20rem;
  }
  @media (min-width: 768px) {
    width: 40rem;
    height: 30rem;
  }
  @media (min-width: 1440px) {
    width: 64.375rem;
    height: 43rem;
  }
`

const HeroText = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    min-width: 26rem;
  }
  @media (min-width: 1440px) {
    min-width: 41rem;
  }
`

const HeroImage = styled(Img)`
  display: none;
  @media (min-width: 768px) {
    min-width: 16rem;
    display: flex;
  }
  @media (min-width: 1440px) {
    min-width: 30rem;
    display: flex;
  }
`

export { Waves, HeroContent, HeroText, HeroImage }
