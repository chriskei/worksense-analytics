import styled from 'styled-components'
import { devices } from '../../assets/devices'

const BiasSectionContainer = styled.div`
  height: 0;
  position: relative;
  @media ${devices.mobile} {
    bottom: 69rem;
  }
  @media ${devices.tablet} {
    bottom: 71rem;
  }
  @media ${devices.laptop} {
    bottom: calc(48rem + 14vw);
  }
`

const SectionHeaderContainer = styled.div`
  @media ${devices.mobile} {
    text-align: center;
    margin: auto 1rem auto 1rem;
  }
  @media ${devices.laptop} {
    text-align: left;
    margin-left: calc(50% - 30rem);
  }
  @media ${devices.desktop} {
    margin-left: calc(50% - 40rem);
  }
`

const BiasCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${devices.mobile} {
    flex-direction: column;
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`

export { BiasSectionContainer, SectionHeaderContainer, BiasCardContainer }
