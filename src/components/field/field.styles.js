import styled from 'styled-components'
import { colors } from '../../assets/colors'

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const LabelText = styled.h4`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: ${colors.darkGreen};
`

const Input = styled.input`
  border-radius: 10px;
  border-color: ${colors.blue};
  background-color: ${colors.tan};
  padding: 12px 18px 12px 18px;
  font-family: 'Avenir', sans-serif;
  line-height: 1.65;
  color: ${colors.darkGray};
  font-size: 1rem;
`

const Textarea = styled.textarea`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${colors.blue};
  background-color: ${colors.tan};
  padding: 12px 18px 12px 18px;
  font-family: 'Avenir', sans-serif;
  line-height: 1.65;
  color: ${colors.darkGray};
  font-size: 1rem;
  height: 21rem;
`

export { Label, LabelText, Input, Textarea }
