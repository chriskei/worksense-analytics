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
  width: 100%;
  position: absolute;
  display: flex;
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

export {
  LandingWaveContainer,
  ButtonsContainer,
  StatisticsContainer,
  TalentLifecycleContainer,
  TalentLifecyclePathContainer,
  StagesContainer,
  TalentLifecycleHeaderText
}
