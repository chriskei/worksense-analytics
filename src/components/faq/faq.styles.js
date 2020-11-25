import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../../assets/colors'
import { H3 } from '../../assets/fonts'

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 375px) {
    margin: auto 1rem auto 1rem;
  }
  @media (min-width: 768px) {
    margin: auto 3.5rem auto 3.5rem;
  }
`

const ImageContainer = styled.div`
  margin: 0.75rem;
  z-index: 1;
`

const ImageBox = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.color};
  box-shadow: 0px 4px 10px ${colors.darkGray};
  cursor: pointer;
  @media (min-width: 375px) {
    height: 7rem;
    width: 7rem;
  }
  @media (min-width: 768px) {
    height: 17rem;
    width: 17rem;
  }
`

const ImageItem = styled(Img)`
  @media (min-width: 375px) {
    max-height: 7rem;
    max-width: 7rem;
  }
  @media (min-width: 768px) {
    max-height: 17rem;
    max-width: 17rem;
  }
`

const ExpandedContainer = styled.div`
  margin: auto;
  @media (min-width: 375px) {
    width: 20rem;
  }
  @media (min-width: 768px) {
    width: 40rem;
  }
  @media (min-width: 1440px) {
    width: 64.375rem;
  }
`

const SelectedCategory = styled(H3)`
  margin: 4rem 0 1rem 0.25rem;
  @media (min-width: 768px) {
    margin-left: 0.75rem;
  }
  @media (min-width: 1440px) {
    margin-left: 1.25rem;
  }
`

export {
  CategoryContainer,
  ImageContainer,
  ImageBox,
  ImageItem,
  ExpandedContainer,
  SelectedCategory
}
