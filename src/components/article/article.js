import React from 'react'
import Img from 'gatsby-image'
import { Quote } from '../../assets/icons'
import { ButtonBody, P } from '../../assets/fonts'
import { colors } from '../../assets/colors'
import {
  ArticleContainer,
  LogoContainer,
  TextContainer,
  LinkText
} from './article.styles'

const Article = (props) => {
  const { image, excerpt, title, url, first } = props

  return (
    <ArticleContainer first={first}>
      <LogoContainer>
        <Img fluid={image.fluid} />
      </LogoContainer>
      <TextContainer>
        <Quote />
        <P>{excerpt}</P>
        <LinkText href={url} target="_blank">
          <ButtonBody color={colors.darkGreen}>{title}</ButtonBody>
        </LinkText>
      </TextContainer>
    </ArticleContainer>
  )
}

export { Article }
