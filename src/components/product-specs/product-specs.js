import React from 'react'
import {
  FeatureContainer,
  FeatureText,
  ProductImage
} from './product-specs.styles.js'

const ProductSpecs = (props) => {
  const { header, imgData, description, reversed } = props

  return (
    <FeatureContainer reversed={reversed}>
      <FeatureText>
        <h1>{header}</h1>
        <p>{description}</p>
      </FeatureText>
      <ProductImage alt={imgData.title} fluid={imgData.fluid} />
    </FeatureContainer>
  )
}

export { ProductSpecs }
