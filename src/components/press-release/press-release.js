import React from 'react'
import { PressHeader, PressContainer, PressImg } from './press-release.styles'

const PressRelease = (props) => {
  const { pressHeader, pressImg, pressText } = props

  return (
    <div>
      <PressHeader>
        <h1>{pressHeader}</h1>
      </PressHeader>
      <PressContainer>
        <PressImg alt="Press Release" fluid={pressImg} />
        <p>{pressText}</p>
      </PressContainer>
    </div>
  )
}

export { PressRelease }
