import React from 'react'
import { Container } from './testimonials.styles'


const Testimonials = (props) => {
const { testHeader, testBody } = props

    return (
        <Container>
            <h1>{testHeader}</h1>
            <h4>{testBody}</h4>
        </Container>
    )
}


export { Testimonials }