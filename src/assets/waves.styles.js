import styled from 'styled-components'
import { devices } from './devices'

const LandingTopContainer = styled.div`
  position: relative;
  top: 5vw;
`

const LandingGreenContainer = styled.div`
  position: relative;
  top: -75vw;
`

const ProductsTopContainer = styled.div`
  position: relative;
  top: -48vw;
`

const ProductsBottomContainer = styled.div`
  position: relative;
  top: -72.2vw;
`

const OurTeamBackgroundContainer = styled.div`
  position: relative;
  top: 10vw;
`

const OurTeamTopContainer = styled.div`
  position: relative;
  top: -75vw;
`

const OurTeamBottomContainer = styled.div`
  position: relative;
  top: -130vw;
`

const LifecyclePathContainer = styled.div`
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {

    display: block;
    svg {
      transform: scale(-0.75);
    }
  }
  @media (min-width: 860px) {
    top: 55px;
  }
  @media ${devices.laptop} {
    top: 0px;
    svg {
      transform: scale(1);
    }
  }
  @media ${devices.desktop} {
    top: 370px;
  }
`

const WaveContainer = styled.div`
  overflow: hidden;
  position: relative;
  top: ${(props) => props.top || 0};
`

const CenteredWave = styled.svg`
  margin-left: 50%;
  transform: translateX(-50%);
  @media ${devices.mobile} {
    width: 768px;
  }
  @media ${devices.tablet} {
    width: 1440px;
  }
  @media ${devices.desktop} {
    width: 1920px;
  }
`

export {
  LandingTopContainer,
  LandingGreenContainer,
  ProductsTopContainer,
  ProductsBottomContainer,
  OurTeamBackgroundContainer,
  OurTeamTopContainer,
  OurTeamBottomContainer,
  LifecyclePathContainer,
  WaveContainer,
  CenteredWave
}
