import styled from 'styled-components'
import { devices } from '../../assets/devices'

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

const BodyContainer = styled.div`
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
