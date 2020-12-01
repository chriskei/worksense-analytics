import styled from 'styled-components'
import { colors } from '../../assets/colors'
import { H2, HeroBody } from '../../assets/fonts'
import { devices } from '../../assets/devices'

const MissionContainer = styled.div`
  position: relative;
  @media ${devices.mobile} {
    padding: 5rem 0 0 0;
    margin: 0 0 10rem 0;
  }
  @media ${devices.tablet} {
    padding: 10rem 0 0 0;
    margin: auto;
  }
`

const MissionHeader = styled(HeroBody)`
  position: relative;
  text-align: center;
  margin: 0 auto 0 auto;
  color: ${colors.tan};
  @media ${devices.mobile} {
    display: block;
  }
  @media ${devices.tablet} {
    display: none;
  }
`

const MissionText = styled(H2)`
  position: relative;
  text-align: center;
  color: ${colors.darkGreen};
  @media ${devices.mobile} {
    margin: 0.5rem auto 5rem auto;
    width: 20rem;
  }
  @media ${devices.tablet} {
    top: -12vw;
    margin: auto;
    width: 100%;
  }
  @media ${devices.laptop} {
    top: -11vw;
  }
`

export { MissionContainer, MissionHeader, MissionText }
