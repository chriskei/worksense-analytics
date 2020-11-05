import React from 'react'
import { ButtonContainer } from './request-demo-button.styles'
import { Link } from 'gatsby'

const RequestDemoButton = () => {
  return (
    <ButtonContainer>
      <Link to="/request-demo/">Request Demo</Link>
    </ButtonContainer>
  )
}

export { RequestDemoButton }
