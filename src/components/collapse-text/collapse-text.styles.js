import styled from 'styled-components'

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const ArrowContainer = styled.div`
  text-align: center;
  width: 3rem;
`

const BodyContainer = styled.div`
  margin-left: 3rem;
`

export { CollapseContainer, HeaderContainer, ArrowContainer, BodyContainer }
