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
  cursor: pointer;
`

const ArrowContainer = styled.div`
  text-align: center;
  @media ${devices.mobile} {
    margin-top: 1rem;
    min-width: 5rem;
  }
  @media ${devices.tablet} {
    margin-top: 1.3rem;
  }
  @media ${devices.laptop} {
    margin-top: 1.5rem;
    min-width: 8rem;
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
    margin-left: 5rem;
  }
  @media ${devices.laptop} {
    margin-left: 8rem;
  }
`

export { CollapseContainer, HeaderContainer, ArrowContainer, BodyContainer }
