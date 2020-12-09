import styled from 'styled-components'
import { colors } from '../../assets/colors'
import { devices } from '../../assets/devices'

const ButtonContainer = styled.button`
  background-color: ${(props) =>
    props.primary ? `${colors.darkGreen}` : 'inherit'};
  border: ${(props) => (props.primary ? 'none' : `2px solid ${colors.tan}`)};
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  & > a {
    text-decoration: none;
  }
  @media ${devices.mobile} {
    padding: ${(props) =>
      props.primary ? '12px 18px 12px 18px' : '10px 18px 10px 18px'};
  }
  @media ${devices.tablet} {
    padding: ${(props) =>
      props.primary ? '12px 48px 12px 48px' : '10px 48px 10px 48px'};
  }

  &:hover {
    background-color: ${(props) =>
    props.primary ? `${colors.blue}` : 'inherit'};
    transition: 200ms;
  }
`

export { ButtonContainer }
