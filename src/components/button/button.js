import React from 'react'
import { ButtonBody } from '../../assets/fonts'
import { ButtonContainer } from './button.styles'

const Button = (props) => {
  const { primary, text, color } = props

  return (
    <ButtonContainer primary={primary} color={color}>
      <ButtonBody>{text}</ButtonBody>
    </ButtonContainer>
  )
}

export { Button }
