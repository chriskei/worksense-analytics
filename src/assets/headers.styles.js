import styled from 'styled-components'
import { devices } from './devices'

const FaqHeaderContainer = styled.div`
  position: relative;
  margin: auto;
  @media ${devices.mobile} {
    top: 15rem;
    width: 16rem;
    height: 13.5rem;
  }
  @media ${devices.tablet} {
    top: 8rem;
    width: 34rem;
    height: 18.5rem;
  }
  @media ${devices.laptop} {
    top: 15rem;
    width: 40rem;
    height: 20rem;
  }
  @media ${devices.desktop} {
    width: 49rem;
    height: 22rem;
  }
`

const MissionHeaderContainer = styled.div`
  position: relative;
  margin: auto;
  width: 80vw;
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: block;
  }
`

export { FaqHeaderContainer, MissionHeaderContainer }
