import React from 'react'
import Img from 'gatsby-image'
import { FlexContainer, FlexItem } from './workplace-biases.styles'

const WorkplaceBiases = (props) => {
  const { imgData, header, body } = props

  return (
    <FlexContainer>
      <FlexItem>
        <Img alt="Workplace biases" fluid={imgData} />
      </FlexItem>
      <FlexItem>
        <h1>{header}</h1>
        <h4>{body}</h4>
      </FlexItem>
    </FlexContainer>
  )
}

export { WorkplaceBiases }
