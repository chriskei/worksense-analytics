import styled from 'styled-components'
import Img from 'gatsby-image'
import { H3 } from '../../assets/fonts'
import { devices } from '../../assets/devices'

const StatsWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: 0;
`

const StatsContent = styled.div`
  display: flex;
  @media ${devices.mobile} {
    flex-wrap: wrap;
    width: 15rem;
    margin: auto;
    justify-content: center;
  }
  @media ${devices.tablet} {
    flex-wrap: nowrap;
    width: 45rem;
    margin: 18rem auto auto auto;
  }
  @media ${devices.laptop} {
    width: 62rem;
    margin: 12rem auto auto auto;
  }
  @media ${devices.desktop} {
    width: 80rem;
  }
`

const StatsImages = styled.div`
  display: flex;
  @media ${devices.mobile} {
    min-width: 23.5rem;
    justify-content: center;
    margin-top: -4rem;
  }
  @media ${devices.tablet} {
    min-width: 26rem;
    justify-content: flex-start;
    margin-top: 0;
  }
  @media ${devices.laptop} {
    min-width: 36rem;
  }
  @media ${devices.desktop} {
    min-width: 45rem;
  }
`

const StatImg = styled(Img)`
  width: ${(props) => (props.first ? '60%' : '50%')};
  padding: 0;
  margin: ${(props) => (props.first ? '0 0 10rem 0' : '10rem 0 0 -10rem')};
  align-self: ${(props) => (props.first ? 'flex-start' : 'flex-end')};
`

const StatsText = styled.div`
  z-index: 2;
  @media ${devices.mobile} {
    min-width: 4rem;
    margin: 0;
    & > p {
      width: auto;
      margin: 0 0 0 2rem;
    }
  }
  @media ${devices.tablet} {
    min-width: 10rem;
    margin: 2rem 0 0 -6rem;
    & > p {
      margin: 0 0 0 auto;
      width: 26rem;
    }
  }
  @media ${devices.laptop} {
    min-width: 25rem;
    margin: 2rem 0 0 -2rem;
    & > p {
      width: 28rem;
    }
  }
  @media ${devices.desktop} {
    min-width: 35rem;
    margin: 2rem 0 0 0;
    & > p {
      width: 38rem;
    }
  }
`

const StatHeader = styled(H3)`
  position: relative;
  @media ${devices.mobile} {
    min-width: 10rem;
  }
  @media ${devices.tablet} {
    left: -2rem;
    width: 26rem;
  }
  @media ${devices.laptop} {
    left: -7rem;
    width: 35rem;
  }
  @media ${devices.desktop} {
    left: -5rem;
    width: 45rem;
  }
`

const StatsButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0 0 0;
`

export {
  StatsWaveContainer,
  StatsContent,
  StatsImages,
  StatImg,
  StatsText,
  StatHeader,
  StatsButtonContainer
}
