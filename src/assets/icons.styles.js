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

export { QuoteSvg }
