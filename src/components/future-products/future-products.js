import React from 'react'
import { FlexContainer, FlexImg, FlexText } from './future-products.styles.js'

const FutureProducts = ({ data }) => {
  return (
    <FlexContainer>
      <FlexText>
        <h1>{data.title}</h1>
        <p>{data.specDescription.specDescription}</p>
      </FlexText>
      <FlexImg
        alt={(data.title, 'image')}
        fluid={data.productPreviewImage[0].fluid}
      />
      <FlexImg
        alt={(data.title, 'image')}
        fluid={data.productPreviewImage[1].fluid}
      />
    </FlexContainer>
  )
}

export { FutureProducts }
