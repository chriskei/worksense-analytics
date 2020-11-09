import React from 'react'
import {
  StatisticContainer,
  Highlight
} from './statistic.styles.js'

const Statistic = (props) => {
  const { highlight, description } = props

  return (
    <StatisticContainer>
      <Highlight>{highlight}</Highlight>
      <p>{description}</p>
    </StatisticContainer>
  )
}

export { Statistic }
