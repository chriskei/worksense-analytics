import React from 'react'
import { Header } from './section-header.styles'
import { H2 } from '../../assets/fonts'

const SectionHeader = (props) => {
  const { title, color} = props

  return (
    <Header>
      <H2 color={color}>{title}</H2>
    </Header>
  )
}

export { SectionHeader }
