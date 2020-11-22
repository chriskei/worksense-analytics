import styled from 'styled-components'
import Img from 'gatsby-image'

const Waves = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
`

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
`

const HeroText = styled.div`
  z-index: 1;
  margin: auto auto auto 10rem;
  flex: 1 1 60%;
`

const HeroImage = styled(Img)`
  display: flex;
  padding: 12rem;
  flex: 1 1 40%;
`

export { Waves, HeroContent, HeroText, HeroImage }
