import styled from 'styled-components'
import { colors } from './colors.js'

const fonts = {
  manrope: `'Manrope Extra Bold', 'Manrope', 'Arial',
    Arial, sans-serif`,
  poppins: `'Poppins', sans-serif`
}

const fontSizes = {
  h1: `calc(40px + (86 - 40) * ((100vw - 375px) / (1920 - 375)))`,
  h2: `calc(28px + (60 - 28) * ((100vw - 375px) / (1920 - 375)))`,
  h3: `calc(22px + (54 - 22) * ((100vw - 375px) / (1920 - 375)))`,
  heroBody: `calc(15px + (26 - 15) * ((100vw - 375px) / (1920 - 375)))`,
  p: `calc(14px + (24 - 14) * ((100vw - 375px) / (1920 - 375)))`
}

const H1 = styled.h1`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.h1};
  color: ${colors.tan};
  margin: auto 0 auto 0;
  padding-bottom: 1rem;
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
  margin: auto;
`

const P = styled.p`
  font-family: ${fonts.poppins};
  font-size: ${fontSizes.p};
  color: ${(props) => props.color || colors.darkGreen};
`

const ButtonBody = styled.p`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.p};
  color: ${colors.tan};
  margin: auto;
`

export { H1, H2, H3, HeroBody, P, ButtonBody }
