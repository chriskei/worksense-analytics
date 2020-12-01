import styled from 'styled-components'
import { colors } from '../../assets/colors'
import { P } from '../../assets/fonts'
import { devices } from '../../assets/devices'

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 0;
`

const LabelText = styled(P)`
  font-weight: bold;
  margin: 0.75rem 0 0 0;
`

const Input = styled.input`
  border: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${colors.darkGreen};
  background-color: ${colors.tan};
  padding: 12px 18px 12px 18px;
  font-family: 'Avenir', sans-serif;
  line-height: 1.65;
  color: ${colors.darkGray};
  font-size: 1rem;
`

const TextArea = styled.textarea`
  border: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${colors.darkGreen};
  background-color: ${colors.tan};
  padding: 12px 18px 12px 18px;
  font-family: 'Avenir', sans-serif;
  line-height: 1.65;
  color: ${colors.darkGray};
  font-size: 1rem;
  @media ${devices.mobile} {
    height: 20rem;
  }
  @media ${devices.tablet} {
    height: 10rem;
  }
  @media ${devices.desktop} {
    height: 19.75rem;
  }
`

export { Label, LabelText, Input, TextArea }
