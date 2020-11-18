import styled from 'styled-components'
import Img from 'gatsby-image'

const Waves = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
`

const WaveContainer = styled.div`
  position: relative;
  top: ${(props) => props.posn};
`

const HeroContent = styled.div`
  display: flex;
`

const HeroText = styled.div`
  z-index: 1;
  flex: 1 1 60%;
  margin: 0 0 0 5em;
  padding: 5em 5em 0 0;
`

const HeroImage = styled(Img)`
  flex: 1 1 30%;
  margin: 10em 5em 0 5em;
`

export { Waves, WaveContainer, HeroContent, HeroText, HeroImage }
