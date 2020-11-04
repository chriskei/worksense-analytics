import styled from 'styled-components'
import Img from 'gatsby-image'

const PressContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 2rem;
`

const PressHeader = styled.h1`
    text-align: center;
    font-size: 20px;
`

const PressImg = styled(Img)`
    flex: 2 3 50%;
    margin: 0 50px 0 50px;
    & > p {
        position: relative;
    }
`

export { PressContainer, PressHeader, PressImg }