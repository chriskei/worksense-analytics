import styled from 'styled-components'
import { colors } from '../assets/colors'

const ContactHeader = styled.h1`
  text-align: center;
  color: ${colors.darkAquamarine};
  margin-top: 5.5rem;
`

const RequestDemoContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.darkAquamarine};
  padding-top: 4rem;
  margin-bottom: 1rem;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 1rem;
  width: 24.5rem;
  align-self: center;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: auto;
  width: 24.5rem;
`

export { ContactHeader, RequestDemoContainer, LeftContainer, RightContainer }
