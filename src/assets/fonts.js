import styled from 'styled-components'
import { colors } from './colors.js'

const fonts = {
    manrope:  `'Manrope Extra Bold', 'Manrope', 'Arial',
    Arial, sans-serif`,
    poppins: `'Poppins', sans-serif`,
}

const fontSizes = {
    h1: `72px`,
    h2: `56px`,
    h3: `48px`,
    body1: `24px`,
    body2: `18px`
}
  
const H1 = styled.h1`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.h1};
  color: ${colors.tan};
`

const H2 = styled.h2`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.h2};
`

const H3 = styled.h2`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.h3};
`

const Body1 = styled.p`
  font-family: ${fonts.poppins};
  font-size: ${fontSizes.body1};
`

const Body2 = styled.p`
  font-family: ${fonts.poppins};
  font-size: ${fontSizes.body2};
`

export { H1, H2, H3, Body1, Body2 }
  