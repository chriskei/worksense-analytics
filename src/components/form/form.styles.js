import styled from 'styled-components'
import { colors } from '../../assets/colors'

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 5.5rem;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 1rem;
  width: 24.5rem;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: auto;
  width: 24.5rem;
`

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 0.5rem;
`

const Button = styled.button`
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
`

export { FormContainer, LeftContainer, RightContainer, ButtonContainer, Button }
