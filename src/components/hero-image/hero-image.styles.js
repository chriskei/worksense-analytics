import styled from 'styled-components'
import Img from 'gatsby-image'
import { devices } from '../../assets/devices'

const HeroImg = styled(Img)`
  height: 90vh;
  @media ${devices.mobile} {
    max-height: 896px;
  }
  @media ${devices.tablet} {
    max-height: 1024px;
  }
  @media ${devices.laptop} {
    max-height: 768px;
  }
  @media ${devices.desktop} {
    max-height: 800px;
  }
`

export { HeroImg }
