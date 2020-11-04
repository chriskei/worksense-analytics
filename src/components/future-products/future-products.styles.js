import styled from 'styled-components'
import Img from 'gatsby-image'

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 2em 0 2em;
`;

const FlexText = styled.div`
    flex: 1 1 60%;
`;

const FlexImg = styled(Img)`
    flex: 1 1 20%;
    margin: 0 0 0 3em;
`;

export { FlexContainer, FlexImg, FlexText }