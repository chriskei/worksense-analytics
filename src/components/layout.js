import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import { NavBar } from './NavBar/navigation.js'

class Layout extends React.Component {

  render() {
    const { location, children } = this.props
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

<<<<<<< HEAD
export default Template
=======
export { Layout }
>>>>>>> Changed to non-default exports for templates, components, and styled components
