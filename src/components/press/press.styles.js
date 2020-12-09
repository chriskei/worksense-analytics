import styled, { keyframes } from 'styled-components'
import { devices } from '../../assets/devices'
import { animations } from '../../assets/animations'

const PressHeaderContainer = styled.div`
  text-align: center;
  @media ${devices.mobile} {
    margin-top: 5rem;
  }
  @media ${devices.tablet} {
    margin-top: 2rem;
  }
`

const ArticleContainer = styled.div`
  @media ${devices.mobile} {
    height: calc(25rem + 30vw);
  }
  @media ${devices.tablet} {
    height: 24rem;
  }
  @media ${devices.laptop} {
    height: 28rem;
  }
  @media ${devices.desktop} {
    height: 31rem;
  }
`

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
`

const SingleTab = styled.div`
  margin: 1.5rem;
  cursor: pointer;
`

const fadeInOut = keyframes`
  0% { left: 100%; opacity: 0%; }
  20% { left: 0; opacity: 100%; }
  80% { left: 0; opacity: 100%; }
  100% { left: -100%; opacity: 0%; }
`

const fadeOut = keyframes`
  0% { left: 0; opacity: 100%; }
  100% { left: -100%; opacity: 0%; }
`

const ArticleAnimation = styled.div`
  position: relative;
  animation: ${(props) => (props.out ? fadeOut : fadeInOut)}
    ${(props) =>
      props.out
        ? animations.pressFullCarouselLength / 5.0
        : animations.pressFullCarouselLength}s
    1;
`

export {
  PressHeaderContainer,
  ArticleContainer,
  TabContainer,
  SingleTab,
  ArticleAnimation
}
