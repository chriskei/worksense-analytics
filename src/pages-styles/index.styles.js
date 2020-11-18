import styled from 'styled-components'

const HeroContainer = styled.div`
  > * {
    height: 60vw;
    background: linear-gradient(90deg, rgba(7, 163, 178, 1) 0%, rgba(217, 236, 199, 1) 100%);
  }
`

const StatisticsContainer = styled.div`
  display: flex;
  padding: 2rem;
`

export { HeroContainer, StatisticsContainer }