import React from 'react'
import {
  FeatureContainer,
  FeatureHeader,
  ProductImage
} from './product-specs.styles.js'

const ProductSpecs = (props) => {
  const { productHeader, productImg, productDescription } = props

  return (
    <>
      <FeatureHeader>
        <h1>{productHeader}</h1>
      </FeatureHeader>
      <FeatureContainer>
        <ProductImage alt="Product Feature" fluid={productImg} />
        <p>{productDescription}</p>
      </FeatureContainer>
    </>
  )
}

export { ProductSpecs }
