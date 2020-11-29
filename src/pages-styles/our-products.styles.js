import styled from 'styled-components'

const ProductsWaveContainer = styled.div`
  height: 0;
  position: relative;
  top: 0;
`

const ProductPageContainer = styled.div`
  margin: auto;
  @media (min-width: 375px) {
    padding-top: 92vw;
    width: 20rem;
  }
  @media (min-width: 768px) {
    padding-top: 50vw;
    width: 40rem;
  }
  @media (min-width: 1024px) {
    padding-top: 32vw;
    width: 52rem;
  }
  @media (min-width: 1440px) {
    padding-top: 15vw;
    width: 80rem;
  }
`

const ButtonContainer = styled.div`
  margin: 2em 0 2em 0;
  text-align: center;
`

const SectionHeaderContainer = styled.div`
  @media (min-width: 375px) {
      margin: 0;
  }
  @media (min-width: 768px) {
      margin: 0 0 0 2em;
  }
`

export {
  ProductsWaveContainer,
  ProductPageContainer,
  ButtonContainer,
  SectionHeaderContainer
}
