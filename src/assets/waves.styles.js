import styled from 'styled-components'
import { devices } from './devices'

const LifecyclePathContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  top: 300px;
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
