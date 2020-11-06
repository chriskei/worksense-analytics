import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroImg = styled(Img)`
  height: 90vh;
  max-height: 1080px;
  @media only screen and (min-width: 1440px) {
    max-height: 800px;
  }
  @media only screen and (min-width: 1024px) {
    max-height: 768px;
  }
  @media only screen and (min-width: 768px) {
    max-height: 1024px;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    max-height: 896px;
  }
`

export { HeroImg }
