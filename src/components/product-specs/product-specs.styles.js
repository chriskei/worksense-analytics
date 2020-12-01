import styled from 'styled-components'
import Img from 'gatsby-image'
import { devices } from '../../assets/devices'

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0 2rem 0;
  @media ${devices.mobile} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  @media ${devices.tablet} {
    flex-wrap: nowrap;
    flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  }
`

const FeatureText = styled.div`
  @media ${devices.mobile} {
    margin: 2em 0 0 0;
    width: 100%;
    & > h2 {
      margin: 0;
    }
  }
  @media ${devices.tablet} {
    margin: ${(props) => (props.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
    width: 50%;
  }
`

const ProductImage = styled(Img)`
  margin: 0;
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 50%;
  }
`

export { FeatureContainer, FeatureText, ProductImage }
