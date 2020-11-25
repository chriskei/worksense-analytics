import styled from 'styled-components'

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

const WaveContainer = styled.div`
  overflow: hidden;
  position: relative;
  top: ${(props) => props.top || 0};
`

const CenteredWave = styled.svg`
  margin-left: 50%;
  transform: translateX(-50%);
  @media (min-width: 375px) {
    width: 768px;
  }
  @media (min-width: 768px) {
    width: 1440px;
  }
  @media (min-width: 1440px) {
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
  WaveContainer,
  CenteredWave
}
