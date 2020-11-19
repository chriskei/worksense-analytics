import styled from 'styled-components'
import Img from 'gatsby-image'

const Waves = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
`

const HeroContent = styled.div`
  display: inline-flex;
`

const HeroText = styled.div`
  z-index: 1;
  margin: 2em 8em 2em 14em;
  padding: 3em 0 0 0;
`

const HeroImage = styled(Img)`
  width: 100%;
  display: inline-flex;
  margin: 10em 10em 0 0;
  position: relative;
`

export { Waves, HeroContent, HeroText, HeroImage }
