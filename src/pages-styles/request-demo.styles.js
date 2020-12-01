import styled from 'styled-components'

const DemoWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: -100px;
`

const ContactWavesContainer = styled.div`
  position: relative;
  @media (min-width: 375px) {
    height: 30px;
    bottom: 1044px;
  }
  @media (min-width: 1440px) {
    height: 100px;
    bottom: 974px;
  }
`

const SectionHeaderContainer = styled.div`
  text-align: left;
  @media (min-width: 375px) {
    width: 20rem;
    margin: 10rem auto auto auto;
  }
  @media (min-width: 768px) {
    width: 40rem;
    margin: 15rem auto auto auto;
  }
  @media (min-width: 1440px) {
    width: 64.375rem;
    margin: 25rem auto auto auto;
  }
`

export { DemoWaveContainer, ContactWavesContainer, SectionHeaderContainer }
