import styled from 'styled-components'

const HeroContainer = styled.div`
  > * {
    background: linear-gradient(
      90deg,
      rgba(7, 163, 178, 1) 0%,
      rgba(217, 236, 199, 1) 100%
    );
  }
  @media (min-width: 375px) {
    > * {
      height: 188vw;
    }
  }
  @media (min-width: 768px) {
    > * {
      height: 120vw;
    }
  }
  @media (min-width: 1024px) {
    > * {
      height: 80vw;
    }
  }
  @media (min-width: 1440px) {
    > * {
      height: 60vw;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  background: transparent;
  & > button {
    max-height: 62px;
    z-index: 1;
  }
  & > :first-child {
       margin-right: 2rem;
    }
  }
  @media (min-width: 375px) {
    width: 20rem;
    bottom: 70vw;
    & > button {
      max-height: 44px;
    }
    & > :first-child {
      margin-right: 1rem;
   }
  }
  @media (min-width: 450px) {
    bottom: 90vw;
  }
  @media (min-width: 600px) {
    bottom: 105vw;
  }
  @media (min-width: 768px) {
    width: 40rem;
    bottom: 49vw;
    & > button {
      max-height: 48px;
    }
  }
  @media (min-width: 1024px) {
    width: 52rem;
    bottom: 25vw;
    & > button {
      max-height: 54px;
    }
  }
  @media (min-width: 1440px) {
    width: 64.375rem;
    bottom: 16vw;
    & > button {
      max-height: 60px;
    }
  }
`

const StatisticsContainer = styled.div`
  display: none;
  padding: 2rem;
`

export { HeroContainer, ButtonsContainer, StatisticsContainer }
