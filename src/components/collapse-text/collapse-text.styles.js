import styled from 'styled-components'

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
  @media (min-width: 375px) {
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    margin-top: 1.3rem;
  }
  @media (min-width: 1440px) {
    margin-top: 1.7rem;
  }
`

const BodyContainer = styled.div`
  @media (min-width: 375px) {
    margin-left: 1.75rem;
  }
  @media (min-width: 768px) {
    margin-left: 3rem;
  }
  @media (min-width: 1440px) {
    margin-left: 4rem;
  }
`

export { CollapseContainer, HeaderContainer, ArrowContainer, BodyContainer }
