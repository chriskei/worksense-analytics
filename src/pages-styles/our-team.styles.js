import styled from 'styled-components'
import { devices } from '../assets/devices'

const TeamWavesContainer = styled.div`
  height: 0;
  position: relative;
  top: 0;
`

const TeamHeroContainer = styled.div`
  & > * {
    padding-top: 5rem;
    height: 15vw;
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
    padding-top: 10rem;
  }
  @media ${devices.tablet} {
    width: 40rem;
    margin: auto;
    padding-top: 6rem;
  }
  @media ${devices.desktop} {
    width: 64.375rem;
    margin: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export { TeamWavesContainer, TeamHeroContainer, AllContactCardsContainer }
