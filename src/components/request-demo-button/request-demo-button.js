import React from 'react'
import { ButtonContainer } from './request-demo-button.styles'
import { Link } from 'gatsby'

const RequestDemoButton = () => {
  return (
    <Link to="/request-demo/">
      <ButtonContainer>Request Demo</ButtonContainer>
    </Link>
  )
}

export { RequestDemoButton }
