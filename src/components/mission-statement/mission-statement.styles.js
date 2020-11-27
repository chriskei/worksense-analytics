import styled from 'styled-components'
import { colors } from '../../assets/colors'
import { H2 } from '../../assets/fonts'

const MissionContainer = styled.div`
  position: relative;
  @media (min-width: 375px) {
    bottom: 220vw;
  }
  @media (min-width: 450px) {
    bottom: 250vw;
  }
  @media (min-width: 768px) {
    bottom: 150vw;
  }
  @media (min-width: 1024px) {
    bottom: 90vw;
  }
  @media (min-width: 1440px) {
    bottom: 60vw;
  }
`

const MissionText = styled(H2)`
  position: relative;
  text-align: center;
  color: ${colors.darkGreen};
  @media (min-width: 375px) {
    top: -6rem;
  }
  @media (min-width: 768px) {
    top: -8rem;
  }
  @media (min-width: 1024px) {
    top: -11rem;
  }
`

export { MissionContainer, MissionText }
