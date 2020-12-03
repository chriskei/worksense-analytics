import styled from 'styled-components'
import { devices } from '../assets/devices'

const LandingWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: -100px;
`

const ButtonsContainer = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  background: transparent;
  z-index: 2;
  & > :first-child {
       margin-right: 2rem;
    }
  }
  @media ${devices.mobile} {
    width: 20rem;
    padding-top: 9rem;
    & > :first-child {
      margin-right: 1rem;
   }
  }
  @media (min-width: 573px) {
    padding-top: 2rem;
  }
  @media ${devices.tablet} {
    width: 40rem;
  }
  @media ${devices.laptop} {
    width: 52rem;
  }
  @media ${devices.desktop} {
    padding-top: 0;
    width: 80rem;
  }
`

const ProductsContainer = styled.div`
  height: 0;
  position: relative;
  bottom: 475px;
  @media ${devices.mobile} {
    margin: auto 2rem auto 2rem;
  }
  @media ${devices.tablet} {
    margin: auto 4rem auto 4rem;
  }
  @media ${devices.laptop} {
    margin: auto 7rem auto 7rem;
  }
`

const ProductsButtonContainer = styled.div`
  @media ${devices.mobile} {
    margin-top: 1rem;
  }
  @media ${devices.laptop} {
    margin-top: 3rem;
  }
`

export {
  LandingWaveContainer,
  ButtonsContainer,
  ProductsContainer,
  ProductsButtonContainer
}
