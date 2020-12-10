import React from 'react'
import Img from 'gatsby-image'
import { colors } from '../../assets/colors'
import {
  CardContainer,
  TextContainer,
  Highlight,
  Body,
  LearnMoreContainer,
  LinkContainer,
  LinkText,
  ChevronContainer
} from './bias-card.styles'
import { ChevronRight } from '../../assets/icons'

const BiasCard = (props) => {
  const { image, highlight, body, url } = props

  return (
    <CardContainer>
      <Img fluid={image.fluid} style={{ borderRadius: '5px 5px 0 0' }} />
      <TextContainer>
        <Highlight>{highlight}</Highlight>
        <Body color={colors.tan}>{body}</Body>
      </TextContainer>
      <LearnMoreContainer>
        <LinkContainer href={url} target="_blank">
          <LinkText color={colors.darkGreen}>Learn More</LinkText>
          <ChevronContainer>
            <ChevronRight />
          </ChevronContainer>
        </LinkContainer>
      </LearnMoreContainer>
    </CardContainer>
  )
}

export { BiasCard }
