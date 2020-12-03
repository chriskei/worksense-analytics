import styled from 'styled-components'
import { devices } from '../assets/devices'

const ProductsWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: 0;
`

const ProductHeroContainer = styled.div`
  @media ${devices.mobile} {
    margin: 5rem 0 0 0;
  }
  @media ${devices.tablet} {
    margin: 12rem 0 0 0;
  }
  @media ${devices.laptop} {
    margin: 10rem 0 0 0;
  }
  @media ${devices.desktop} {
    margin: 5rem 0 0 0;
  }
`

const ProductPageContainer = styled.div`
  margin: auto;
  @media ${devices.mobile} {
    padding-top: 25rem;
    width: 20rem;
  }
  @media (min-width: 573px) {
    padding-top: 18rem;
  }
  @media ${devices.tablet} {
    padding-top: 8rem;
    width: 40rem;
  }
  @media ${devices.laptop} {
    width: 52rem;
  }
  @media ${devices.desktop} {
    width: 80rem;
  }
`

const ButtonContainer = styled.div`
  margin: 2rem 0 10rem 0;
  text-align: center;
`

const ProductVideo = styled.video`
  outline: none;
  width: 100%;
  @media ${devices.tablet} {
    margin: 0;
  }
  @media ${devices.laptop} {
    margin: 2rem 0 2rem 0;
  }
`

export {
  ProductsWaveContainer,
  ProductHeroContainer,
  ProductPageContainer,
  ButtonContainer,
  ProductVideo
}
