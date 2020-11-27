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
  margin-top: 1.5rem;
`

export { FormContainer, LeftContainer, RightContainer, ButtonContainer }
