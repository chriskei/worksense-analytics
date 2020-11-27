import styled from 'styled-components'
import { colors } from '../../assets/colors'
import { H2 } from '../../assets/fonts'

const MissionContainer = styled.div`
  position: relative;
  padding: 10rem 0 0 0;
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
    top: -12rem;
  }
`

export { MissionContainer, MissionText }
