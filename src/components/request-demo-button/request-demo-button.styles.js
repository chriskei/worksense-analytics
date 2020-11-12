import styled from 'styled-components'
import { colors } from '../../assets/colors'

const ButtonContainer = styled.button`
  font-size: 1em;
  background-color: ${colors.darkGreen};
  color: ${colors.tan};
  border-radius: 10px;
  padding: 12px 18px 12px 18px;
  border: none;
  outline: none;
  cursor: pointer;
  & > a {
    text-decoration: none;
  }
  font-family: 'Manrope', sans-serif;
`

export { ButtonContainer }
