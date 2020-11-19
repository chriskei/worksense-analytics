import styled from 'styled-components'
import { colors } from './colors.js'

const fonts = {
  manrope: `'Manrope Extra Bold', 'Manrope', 'Arial',
    Arial, sans-serif`,
  poppins: `'Poppins', sans-serif`
}

const fontSizes = {
  h1: `calc(40px + (90 - 40) * ((100vw - 375px) / (1920 - 375)))`,
  h2: `calc(28px + (60 - 28) * ((100vw - 375px) / (1920 - 375)))`,
  h3: `calc(22px + (54 - 22) * ((100vw - 375px) / (1920 - 375)))`,
  heroBody: `calc(18px + (32 - 18) * ((100vw - 375px) / (1920 - 375)))`,
  p: `calc(14px + (24 - 14) * ((100vw - 375px) / (1920 - 375)))`
}

const H1 = styled.h1`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.h1};
  color: ${colors.tan};
`

const H2 = styled.h2`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.h2};
  color: ${(props) => props.color};
`

const H3 = styled.h2`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.h3};
  color: ${(props) => props.color};
`

const HeroBody = styled.p`
  font-family: ${fonts.poppins};
  font-size: ${fontSizes.heroBody};
  color: ${colors.darkGreen};
`

const P = styled.p`
  font-family: ${fonts.poppins};
  font-size: ${fontSizes.p};
  color: ${colors.darkGreen};
`

export { H1, H2, H3, HeroBody, P }
