import React from 'react'
import Img from 'gatsby-image'
import { LandingWaveBlue, LandingWaveGreen } from '../../assets/waves'
import {
  HeroContainer,
  Waves,
  HeroContent,
  HeroText,
  HeroImage
} from './hero.styles.js'

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
          <h1>{header}</h1>
          <p>{text.secondaryText}</p>
        </HeroText>
        <HeroImage alt={imgData.title} fluid={imgData.fluid} />
      </HeroContent>
    </HeroContainer>
  )
}

export { Hero }
