import styled from 'styled-components'
import { devices } from './devices'

const LifecyclePathContainer = styled.div`
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    top: 80px;
    display: block;
    svg {
      transform: scale(-0.75);
    }
  }
  @media (min-width: 860px) {
    top: 140px;
    svg {
      transform: scale(-0.85);
    }
  }
  @media ${devices.laptop} {
    top: 100px;
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

export { LifecyclePathContainer, WaveContainer, CenteredWave }
