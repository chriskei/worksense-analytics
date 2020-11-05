import styled from 'styled-components'
import Img from 'gatsby-image'

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 5rem;
    border: solid;
    width: 65%;
`;

const MemberImg = styled(Img)`
    flex: 1 1 50%;
    margin: 0 50px 0 50px;
    & > p {
        position: relative;
    }
    margin-left: 0;
    margin-right: 0;
`;

const LeftContainer = styled.div`
    flex-direction: column;
    flex: 1 1 50%;
    float: left;
`;

const RightContainer = styled.div`
    flex-direction: column;
    flex: 1 1 50%;
    display: inline-block;
    margin: auto;
    padding: 1rem;
    font-size: 18px;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: left;
    margin: auto;
    width: 65%;
    margin-bottom: 8rem;
`;

const Name = styled.h2`
    font-size: 23px;
    position: absolute;
    margin-top: 0;
`

const Position = styled.h3`
    font-size: 15px;
    position: absolute;
    padding-top: 1rem;
`

export { FlexContainer, MemberImg, LeftContainer, RightContainer, InfoContainer, Name, Position }