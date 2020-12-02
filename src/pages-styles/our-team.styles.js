import styled from 'styled-components'
import { devices } from '../assets/devices'

const WavesContainer = styled.div`
  & > * {
    height: 19vw;
  }
`

const AllContactCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  @media ${devices.mobile} {
    width: 15rem;
    margin-top: 5rem;
  }
  @media ${devices.tablet} {
    width: 40rem;
    margin: auto;
    padding-top: 3rem;
  }
  @media ${devices.desktop} {
    width: 64.375rem;
    margin: auto;
  }
`

export { WavesContainer, AllContactCardsContainer }
