import styled from 'styled-components'
import { devices } from './devices'

const FaqHeaderContainer = styled.div`
  position: relative;
  top: 10rem;
  margin: auto;
  @media ${devices.mobile} {
    width: 16rem;
    height: 13.5rem;
  }
  @media ${devices.tablet} {
    width: 34rem;
    height: 18.5rem;
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
