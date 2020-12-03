import React from 'react'
import { SectionHeader } from '../section-header/section-header'
import { colors } from '../../assets/colors'
import { BiasCard } from '../bias-card/bias-card'
import {
  BiasSectionContainer,
  SectionHeaderContainer,
  BiasCardContainer
} from './bias.styles'

const Bias = (props) => {
  const { biasHeader, biasImage, largeBody, smallBody, learnMoreUrl } = props

  return (
    <BiasSectionContainer>
      <SectionHeaderContainer>
        <SectionHeader title={biasHeader} color={colors.tan} />
      </SectionHeaderContainer>
      <BiasCardContainer>
        {biasImage.length > 0 &&
          biasImage.length == largeBody.length &&
          largeBody.length == smallBody.length &&
          smallBody.length == learnMoreUrl.length &&
          largeBody.map((highlight, index) => (
            <BiasCard
              key={highlight}
              image={biasImage[index]}
              highlight={highlight}
              body={smallBody[index]}
              url={learnMoreUrl[index]}
            />
          ))}
      </BiasCardContainer>
    </BiasSectionContainer>
  )
}

export { Bias }
