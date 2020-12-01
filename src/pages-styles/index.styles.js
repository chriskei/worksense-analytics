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

const TalentLifecyclePathContainer = styled.div`
  width: 100%;
  position: absolute;
  
`

const TalentLifecycleContainer = styled.div`
  z-index: 1;
  position: relative;
  margin-left: 5rem;
`

const TalentLifecycleHeaderText = styled(H1)`
  color: ${colors.darkGreen};
  position: relative;
  z-index: 1;
  margin: 18rem 0 0 5rem;
  width: 70%;
`

export { LandingWaveContainer, ButtonsContainer, StatisticsContainer, TalentLifecyclePathContainer, TalentLifecycleContainer, TalentLifecycleHeaderText }
