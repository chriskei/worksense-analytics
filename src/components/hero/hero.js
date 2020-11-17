import React from 'react'
import {
  HeroContainer,
  Waves,
  WaveContainer,
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
    BackgroundWave,
    FirstWave,
    SecondWave,
    firstWavePosn,
    secondWavePosn,
    bg,
    height
  } = props

  return (
    <HeroContainer bg={bg} height={height}>
      <Waves>
        {BackgroundWave && <BackgroundWave />}
        <WaveContainer posn={firstWavePosn}>
          <FirstWave />
        </WaveContainer>
        <WaveContainer posn={secondWavePosn}>
          <SecondWave />
        </WaveContainer>
      </Waves>
      <HeroContent>
        <HeroText>
          <H1>{header}</H1>
          {text && <HeroBody>{text.secondaryText}</HeroBody>}
        </HeroText>
        {imgData &&
          <HeroImage alt={imgData.title} fluid={imgData.fluid} />}
      </HeroContent>
    </HeroContainer>
  )
}

export { Hero }
