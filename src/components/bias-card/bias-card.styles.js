import styled from 'styled-components'
import { colors } from '../../assets/colors'
import { H1, P, ButtonBody } from '../../assets/fonts'
import { devices } from '../../assets/devices'

const CardContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${colors.tan};
  @media ${devices.mobile} {
    width: 22rem;
    margin: 0.75rem;
  }
  @media ${devices.laptop} {
    width: 16rem;
    margin: 2.5rem;
  }
  @media ${devices.desktop} {
    width: 22rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  @media ${devices.mobile} {
    flex-direction: row;
  }
  @media ${devices.laptop} {
    flex-direction: column;
  }
`

const Highlight = styled(H1)`
  text-align: center;
  padding: 0;
  @media ${devices.mobile} {
    margin: auto 0.5rem auto 0.5rem;
  }
  @media ${devices.laptop} {
    margin: 1rem auto auto auto;
  }
`

const Body = styled(P)`
  @media ${devices.mobile} {
    margin: 0.5rem;
  }
  @media ${devices.laptop} {
    height: calc(8rem + 10vw);
    margin: auto 2rem auto 2rem;
  }
  @media ${devices.desktop} {
    height: calc(3rem + 10vw);
  }
`

const LearnMoreContainer = styled.div`
  background: ${colors.tan};
  border-radius: 0 0 5px 5px;
  @media ${devices.mobile} {
    padding: 0.5rem;
  }
  @media ${devices.laptop} {
    padding: 1rem;
    margin-top: 2rem;
  }
`

const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
`

const LinkText = styled(ButtonBody)`
  margin: auto 0 auto 0;
  color: ${colors.darkGreen};

  &:hover {
    color: rgb(8, 61, 68, 0.65);
    transition: 200ms;
  }
`

const ChevronContainer = styled.div`
  margin: 0.5rem 0 0 0.5rem;
`

export {
  CardContainer,
  TextContainer,
  Highlight,
  Body,
  LearnMoreContainer,
  LinkContainer,
  LinkText,
  ChevronContainer
}
