import React from 'react'
import { LandingWaveBlue, LandingWaveGreen } from '../../assets/waves'
import {
  HeroContainer,
  Waves,
  HeroContent,
  HeroText,
  HeroImage
} from './hero.styles.js'
import { H1, HeroBody } from '../../assets/fonts.js'

const Hero = (props) => {
  const { header, text, imgData } = props

  return (
    <HeroContainer>
      <Waves>
        <LandingWaveBlue></LandingWaveBlue>
        <LandingWaveGreen></LandingWaveGreen>
      </Waves>
      <HeroContent>
        <HeroText>
          <H1>{header}</H1>
          <HeroBody>{text.secondaryText}</HeroBody>
        </HeroText>
        <HeroImage alt={imgData.title} fluid={imgData.fluid} />
      </HeroContent>
    </HeroContainer>
  )
}

export { Hero }
