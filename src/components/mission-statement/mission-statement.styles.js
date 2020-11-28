import styled from 'styled-components'
import { colors } from '../../assets/colors'
import { H2 } from '../../assets/fonts'
import { devices } from '../../assets/devices'

const MissionContainer = styled.div`
  position: relative;
  padding: 10rem 0 0 0;
`

const MissionText = styled(H2)`
  position: relative;
  text-align: center;
  color: ${colors.darkGreen};
  @media ${devices.mobile} {
    top: -18vw;
  }
  @media ${devices.tablet} {
    top: -15vw;
  }
  @media ${devices.laptop} {
    top: -14vw;
  }
  @media ${devices.desktop} {
    top: -13vw;
  }
`

export { MissionContainer, MissionText }
