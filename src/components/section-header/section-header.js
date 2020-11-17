import React from 'react'
import { Header } from './section-header.styles'
import { H2 } from '../../assets/fonts'

const SectionHeader = (props) => {
  const { title, color } = props

  return (
    <Header color={color}>
      <H2>{title}</H2>
    </Header>
  )
}

export { SectionHeader }
