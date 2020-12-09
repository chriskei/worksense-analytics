import styled from 'styled-components'
import { devices } from '../assets/devices'
import { H1 } from '../assets/fonts'
import { colors } from '../assets/colors.js'

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

const TalentLifecycleContainer = styled.div`
  background-color: ${colors.tan};
  z-index: 2;
  position: relative;
  padding: 2rem;
  & > * {
    z-index: 3;
  }
`

const TalentLifecyclePathContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  width: 100%;
`

const StagesContainer = styled.div`
  position: relative;
  margin: auto;
  @media ${devices.mobile} {
    width: 20rem;
  }
  @media ${devices.tablet} {
    width: 40rem;
  }
  @media ${devices.laptop} {
    width: 52rem;
  }
  @media ${devices.desktop} {
    width: 80rem;
  }
`

const TalentLifecycleHeaderText = styled(H1)`
  color: ${colors.darkGreen};
  position: relative;
  width: 70%;
  padding-top: 4rem;
  margin: 15rem 0 0 4rem;
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
  TalentLifecycleContainer,
  TalentLifecyclePathContainer,
  StagesContainer,
  TalentLifecycleHeaderText,
  ProductsContainer,
  ProductsButtonContainer
}
