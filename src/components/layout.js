import React from 'react'
import Container from './container'
import { NavBar } from './nav-bar/nav-bar.js'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <NavBar />
        {children}
      </Container>
    )
  }
}

export { Layout }
