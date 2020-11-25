import React from 'react'
import { Link } from 'gatsby'
import { ButtonBody } from '../../assets/fonts'
import { ButtonContainer } from './request-demo-button.styles'

const RequestDemoButton = () => {
  return (
    <Link to="/request-demo/">
      <ButtonContainer>
        <ButtonBody>Request Demo</ButtonBody>
      </ButtonContainer>
    </Link>
  )
}

export { RequestDemoButton }
