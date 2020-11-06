import React from 'react'
import { FlexContainer, FlexImg, FlexText } from './future-products.styles.js'

const FutureProducts = (props) => {
  const { header, description, imgData } = props

  return (
    <FlexContainer>
      <FlexText>
        <h1>{header}</h1>
        <p>{description}</p>
      </FlexText>
      <FlexImg alt={(header, 'image')} fluid={imgData[0].fluid} />
      <FlexImg alt={(header, 'image')} fluid={imgData[1].fluid} />
    </FlexContainer>
  )
}

export { FutureProducts }
