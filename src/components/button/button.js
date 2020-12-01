import React from 'react'
import { ButtonBody } from '../../assets/fonts'
import { ButtonContainer } from './button.styles'

const Button = (props) => {
  const { primary, text } = props

  return (
    <ButtonContainer primary={primary}>
      <ButtonBody>{text}</ButtonBody>
    </ButtonContainer>
  )
}

export { Button }
