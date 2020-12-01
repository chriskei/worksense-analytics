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

const StatisticsContainer = styled.div`
  padding: 2rem;
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: flex;
  }
`

export { LandingWaveContainer, ButtonsContainer, StatisticsContainer }
