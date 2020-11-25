import styled from 'styled-components'
import { colors } from '../../assets/colors'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  margin: auto;
  @media (min-width: 375px) {
    width: 20rem;
  }
  @media (min-width: 768px) {
    width: 40rem;
  }
  @media (min-width: 1440px) {
    width: 64.375rem;
    flex-direction: row;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1440px) {
    margin-right: 2rem;
    width: 50%;
  }
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1440px) {
    margin-left: 2rem;
    width: 50%;
  }
`

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 0.5rem;
`

const Button = styled.button`
  background-color: ${colors.darkGreen};
  color: ${colors.tan};
  border-radius: 10px;
  padding: 12px 48px 12px 48px;
  margin-top: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  & > a {
    text-decoration: none;
  }
`

export { FormContainer, LeftContainer, RightContainer, ButtonContainer, Button }
