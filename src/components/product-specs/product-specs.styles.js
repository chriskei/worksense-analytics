import styled from 'styled-components'
import Img from 'gatsby-image'

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 375px) {
      flex-wrap: wrap;
      padding: 2rem 0 2rem 0;
      flex-direction: column-reverse;
  }
  @media (min-width: 768px) {
      flex-wrap: nowrap;
      padding: 2rem;
      flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  }
`

const FeatureText = styled.div`
  @media (min-width: 375px) {
    margin: 2em 0 0 0;
    width: 100%;
    & > h2 {
      margin: 0;
    }
  }
  @media (min-width: 768px) {
    margin: 0 5em 0 0;
    width: 50%;
  }
`

const ProductImage = styled(Img)`
  @media (min-width: 375px) {
    margin: 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    margin: 0 5em 0 0;
    width: 50%;
  }
`

export { FeatureContainer, FeatureText, ProductImage }
