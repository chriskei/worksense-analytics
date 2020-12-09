import styled, { keyframes } from 'styled-components'
import { devices } from '../../assets/devices'
import { animations } from '../../assets/animations'

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  cursor: pointer;
`

const ArrowContainer = styled.div`
  text-align: center;
  width: 10rem;
  @media ${devices.mobile} {
    margin-top: 1rem;
  }
  @media ${devices.tablet} {
    margin-top: 1.3rem;
  }
  @media ${devices.desktop} {
    margin-top: 1.7rem;
  }
`

const open = keyframes`
  0% { max-height: 0; opacity: 0%; }
  100% { max-height: ${animations.collapseTextHeight}; opacity: 100%; }
`

const close = keyframes`
  0% { max-height: ${animations.collapseTextHeight}; opacity: 100%; }
  100% { max-height: 0; opacity: 0% }
`

const BodyContainer = styled.div`
  position: relative;
  overflow: hidden;
  animation: ${(props) => (props.opening ? open : close)}
    ${animations.collapseTextLength}s 1;
  max-height: ${(props) =>
    props.opening ? animations.collapseTextHeight : '0'};
  @media ${devices.mobile} {
    margin-left: 1.75rem;
  }
  @media ${devices.tablet} {
    margin-left: 3rem;
  }
  @media ${devices.desktop} {
    margin-left: 4rem;
  }
`

export { CollapseContainer, HeaderContainer, ArrowContainer, BodyContainer }
