import React from 'react'
import {
  Waves,
  HeroContent,
  HeroText,
  HeroImage
} from './hero.styles.js'
import { H1, HeroBody } from '../../assets/fonts.js'

const Hero = (props) => {
  const {
    header,
    text,
    imgData,
    backgroundWave,
    firstWave,
    secondWave
  } = props

  return (
    <>
      <Waves>
        {backgroundWave && backgroundWave}
        {firstWave && firstWave}
        {secondWave && secondWave}
      </Waves>
      <HeroContent>
        <HeroText>
          <H1>{header}</H1>
          {text && <HeroBody>{text.secondaryText}</HeroBody>}
        </HeroText>
        {imgData && <HeroImage alt={imgData.title} fluid={imgData.fluid} />}
      </HeroContent>
    </>
  )
}

export { Hero }
