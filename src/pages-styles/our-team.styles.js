import styled from 'styled-components'

const WavesContainer = styled.div`
  > * {
    height: 19vw;
  }
`
const HeadingContainer = styled.div`
  position: absolute;
  z-index: 1;
  margin: 2em 14em;
  padding: 3em 0 0 0;
`

const AllContactCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  width: 70%;
  flex-wrap: wrap;
`

export { WavesContainer, HeadingContainer, AllContactCardsContainer }
