import styled from 'styled-components'
import Img from 'gatsby-image'

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  padding: 2rem;
`

const FeatureText = styled.div`
  flex: 1 1 50%;
  margin: 0 5em 0 0;
`

const ProductImage = styled(Img)`
  flex: 1 1 50%;
  margin: 0 5em 0 0;
`

export { FeatureContainer, FeatureText, ProductImage }
