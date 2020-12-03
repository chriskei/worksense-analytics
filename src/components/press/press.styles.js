import styled from 'styled-components'
import { devices } from '../../assets/devices'

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

export { PressHeaderContainer, ArticleContainer, TabContainer, SingleTab }
