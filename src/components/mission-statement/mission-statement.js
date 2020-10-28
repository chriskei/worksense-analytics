import React from 'react'
import { Div } from './mission-statement.styles'

const MissionStatement = (props) => {
  const { header, body } = props

  return (
    <Div>
      <h1>{header}</h1>
      <h4>{body}</h4>
    </Div>
  )
}

export { MissionStatement }
