import React from 'react'
import { MissionContainer, MissionHeader, MissionText } from './mission-statement.styles'
import { Mission } from '../../assets/headers'

const MissionStatement = (props) => {
  const { text } = props

  return (
    <MissionContainer>
      <Mission />
      <MissionHeader>MISSION</MissionHeader>
      <MissionText>{text}</MissionText>
    </MissionContainer>
  )
}

export { MissionStatement }
