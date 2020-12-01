import styled from 'styled-components'
import { devices } from '../assets/devices'

const DemoWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: -100px;
`

const ContactWavesContainer = styled.div`
  position: relative;
  @media ${devices.mobile} {
    height: 30px;
    bottom: 1044px;
  }
  @media ${devices.desktop} {
    height: 100px;
    bottom: 974px;
  }
`

const SectionHeaderContainer = styled.div`
  text-align: left;
  @media ${devices.mobile} {
    width: 20rem;
    margin: 10rem auto auto auto;
  }
  @media ${devices.tablet} {
    width: 40rem;
    margin: 15rem auto auto auto;
  }
  @media ${devices.desktop} {
    width: 64.375rem;
    margin: 25rem auto auto auto;
  }
`

export { DemoWaveContainer, ContactWavesContainer, SectionHeaderContainer }
