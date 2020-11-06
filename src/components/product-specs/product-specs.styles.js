import styled from 'styled-components'
import Img from 'gatsby-image'

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
`

const FeatureHeader = styled.h1`
  text-align: center;
  font-size: 20px;
`

const ProductImage = styled(Img)`
  flex: 1 1 75%;
  margin: 0 50px 0 50px;
  & > p {
    position: relative;
  }
`

export { FeatureContainer, FeatureHeader, ProductImage }
