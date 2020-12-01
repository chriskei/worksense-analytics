import styled from 'styled-components'
import { colors } from '../../assets/colors'

const ButtonContainer = styled.button`
  background-color: ${colors.darkGreen};
  border-radius: 10px;
  padding: 12px 18px 12px 18px;
  border: none;
  outline: none;
  cursor: pointer;
  & > a {
    text-decoration: none;
  }
`

export { ButtonContainer }
