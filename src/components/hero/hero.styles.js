import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroContainer = styled.div`
    background: rgb(7,163,178);
    background: linear-gradient(180deg, rgba(7,163,178,1) 0%, rgba(217,236,199,1) 70%, rgba(217,236,199,0) 100%);
    height: 125vh;
`

const Waves = styled.div`
    position: absolute;
    top: 75px;
    width: 100vw;
    z-index: 0;
`

const HeroContent = styled.div`
    display: flex;
`

const HeroText= styled.div`
    z-index: 1;
    flex: 1 1 50%;
    margin: 0 0 0 5em;
    padding: 15em 5em 0 0;
`

const HeroImage = styled(Img)`
    flex: 1 1 40%;
    margin: 10em 5em 0 5em;
`

export { HeroContainer, Waves, HeroContent, HeroText, HeroImage }