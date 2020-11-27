import React from 'react'
import { MissionContainer, MissionText } from './mission-statement.styles'
import { Mission } from '../../assets/headers'
import { H2 } from '../../assets/fonts'

const MissionStatement = (props) => {
  const { text } = props

  return (
    <MissionContainer>
      <Mission />
      <MissionText>{text}</MissionText>
    </MissionContainer>
  )
}

export { MissionStatement }
