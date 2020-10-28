import styled from 'styled-components'
import { colors } from '../../assets/colors'

const FlexContainer = styled.div`
  background-color: ${colors.tan};
  display: flex;
  justify-content: center;
`

const FlexItem = styled.div`
  align-self: center;
  margin: 1rem;
  width: 30rem;
`

export { FlexContainer, FlexItem }
