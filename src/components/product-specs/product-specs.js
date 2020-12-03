import React from 'react'
import {
  FeatureContainer,
  FeatureText,
  ProductImage
} from './product-specs.styles.js'
import { H3, P } from '../../assets/fonts.js'
import { colors } from '../../assets/colors'

const ProductSpecs = (props) => {
  const { header, imgData, description, reversed } = props

  return (
    <FeatureContainer reversed={reversed}>
      <FeatureText reversed={reversed}>
        <H3 color={`${colors.blue}`}>{header}</H3>
        <P>{description}</P>
      </FeatureText>
      <ProductImage alt={imgData.title} fluid={imgData.fluid} />
    </FeatureContainer>
  )
}

export { ProductSpecs }
