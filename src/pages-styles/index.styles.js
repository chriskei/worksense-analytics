import styled from 'styled-components'

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
  & > button {
    z-index: 1;
  }
  & > :first-child {
       margin-right: 2rem;
    }
  }
  @media (min-width: 375px) {
    width: 20rem;
    padding-top: 9rem;
    & > :first-child {
      margin-right: 1rem;
   }
  }
  @media (min-width: 573px) {
    padding-top: 2rem;
  }
  @media (min-width: 768px) {
    width: 40rem;
  }
  @media (min-width: 1024px) {
    width: 52rem;
  }
  @media (min-width: 1440px) {
    width: 64.375rem;
  }
`

const StatisticsContainer = styled.div`
  padding: 2rem;
  @media (min-width: 375px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`

export { LandingWaveContainer, ButtonsContainer, StatisticsContainer }
