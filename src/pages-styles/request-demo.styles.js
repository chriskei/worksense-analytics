import styled from 'styled-components'
import { devices } from '../assets/devices'

const DemoWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: -100px;
`

const DemoContainer = styled.div`
  @media ${devices.mobile} {
    max-height: 18rem;
    margin: 4rem 0 4rem 0;
  }
  @media ${devices.tablet} {
    max-height: 30rem;
    margin: auto;
  }
  @media ${devices.laptop} {
    height: 38rem;
    max-height: 38rem;
  }
  @media ${devices.desktop} {
    max-height: 40rem;
  }
`

const ContactWavesContainer = styled.div`
  position: relative;
  @media ${devices.mobile} {
    height: 30px;
    bottom: 1044px;
  }
  @media ${devices.laptop} {
    height: 60px;
    bottom: 974px;
  }
  @media ${devices.desktop} {
    height: 100px;
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
  @media ${devices.laptop} {
    width: 52rem;
    margin: 20rem auto auto auto;
  }
  @media ${devices.desktop} {
    width: 64.375rem;
    margin: 25rem auto auto auto;
  }
`

export {
  DemoWaveContainer,
  DemoContainer,
  ContactWavesContainer,
  SectionHeaderContainer
}
