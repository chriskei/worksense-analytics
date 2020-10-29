import React from 'react'
import base from './base.css'
import Container from './container'
import { NavBar } from './NavBar/navigation.js'

class Layout extends React.Component {

  render() {
    const { location, children, navImage } = this.props
    let header

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
