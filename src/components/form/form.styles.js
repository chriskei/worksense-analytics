import styled from 'styled-components'
import { devices } from '../../assets/devices'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  margin: auto;
  @media ${devices.mobile} {
    width: 20rem;
  }
  @media ${devices.tablet} {
    width: 40rem;
  }
  @media ${devices.laptop} {
    width: 52rem;
    flex-direction: row;
  }
  @media ${devices.desktop} {
    width: 64.375rem;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${devices.laptop} {
    margin-right: 2rem;
    width: 50%;
  }
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${devices.laptop} {
    margin-left: 2rem;
    width: 50%;
  }
`

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 1.5rem;
`

export { FormContainer, LeftContainer, RightContainer, ButtonContainer }
