import styled from 'styled-components'
import Img from 'gatsby-image'
import { H3 } from '../../assets/fonts'

const StatsWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: 0px;
`

const StatsContent = styled.div`
  display: flex;
  @media (min-width: 375px) {
    flex-wrap: wrap;
    width: 15rem;
    margin: auto;
    justify-content: center;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    width: 45rem;
    margin: 18rem auto auto auto;
  }
  @media (min-width: 1024px) {
    width: 62rem;
    margin: 12rem auto auto auto;
  }
  @media (min-width: 1440px) {
    width: 80rem;
  }
`

const StatsImages = styled.div`
   display: flex;
   @media (min-width: 375px) {
    min-width: 23.5rem;
    justify-content: center;
    margin-top: -4rem;
   }
  @media (min-width: 768px) {
    min-width: 26rem;
    justify-content: flex-start;
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    min-width: 36rem;
  }
  @media (min-width: 1440px) {
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
  @media (min-width: 375px) {
    min-width: 4rem;
    margin: 0;
    & > p {
        width: auto;
        margin: 0 0 0 2rem;
    }
  }
  @media (min-width: 768px) {
    min-width: 10rem;
    margin: 2rem 0 0 -6rem;
    & > p {
        margin: 0 0 0 auto;
        width: 26rem;
    }
  }
  @media (min-width: 1024px) {
    min-width: 25rem;
    margin: 2rem 0 0 -2rem;
    & > p {
        width: 28rem;
    }
  }
  @media (min-width: 1440px) {
    min-width: 35rem;
    margin: 2rem 0 0 0;
    & > p {
        width: 38rem;
    }
  }
`

const StatHeader = styled(H3)`
    position: relative;
      @media (min-width: 375px) {
        min-width: 10rem;
      }
      @media (min-width: 768px) {
        left: -2rem;
        width: 26rem;
      }
      @media (min-width: 1024px) {
        left: -7rem;
        width: 35rem;
      }
      @media (min-width: 1440px) {
        left: -5rem;
        width: 45rem;
      }
`

const StatsButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem 0 0 0;
`

export { StatsWaveContainer, StatsContent, StatsImages, StatImg, StatsText, StatHeader, StatsButtonContainer }