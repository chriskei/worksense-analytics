import styled from 'styled-components'
import { devices } from './devices'

const QuoteSvg = styled.svg`
  @media ${devices.mobile} {
    width: 20px;
  }
  @media ${devices.laptop} {
    width: 36px;
  }
`

const SocialMediaSvg = styled.svg`
  @media ${devices.mobile} {
    height: 25px;
  }
  @media ${devices.tablet} {
    height: 40px;
  }
  @media ${devices.laptop} {
    width: 50px;
    height: initial;
  }
`

export { QuoteSvg, SocialMediaSvg }
