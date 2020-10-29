import React, { FC } from 'react'
import { Layout } from '../components/layout.js'

export interface RequestDemoProps {
  location: any
}

const RequestDemo: FC<RequestDemoProps> = (props) => {
  const { location } = props

  return (
    <Layout location={location}>
      <h1>Request Demo Page Placeholder</h1>
    </Layout>
  )
}

export default RequestDemo
