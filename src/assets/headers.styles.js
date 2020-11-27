import styled from 'styled-components'

const FaqHeaderContainer = styled.div`
  position: relative;
  top: 10rem;
  margin: auto;
  @media (min-width: 375px) {
    width: 16rem;
    height: 13.5rem;
  }
  @media (min-width: 768px) {
    width: 34rem;
    height: 18.5rem;
  }
  @media (min-width: 1440px) {
    width: 49rem;
    height: 22rem;
  }
`

const MissionHeaderContainer = styled.div`
  position: relative;
  margin: auto;
  @media (min-width: 375px) {
    width: 20rem;
  }
  @media (min-width: 768px) {
    width: 30rem;
  }
  @media (min-width: 1024px) {
    width: 60rem;
  }
  @media (min-width: 1440px) {
    width: 80rem;

  }
`

export { FaqHeaderContainer, MissionHeaderContainer }
