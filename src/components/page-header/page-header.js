import React from 'react'
import { Header } from './page-header.styles'

const PageHeader = (props) => {
  const { title } = props

  return <Header>{title}</Header>
}

export { PageHeader }
