import styled from 'styled-components'
import { colors } from '../../assets/colors'

const FaqContainer = styled.div`
  width: 51rem;
  margin-left: auto;
  margin-right: auto;
  color: ${colors.darkGreen};
`

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ImageContainer = styled.div`
  margin: 1rem;
`

const ImageItem = styled.div`
  width: 20rem;
  height: 20rem;
  padding: 1rem;
  border: solid;
  border-color: ${colors.blue};
  cursor: pointer;
`

export { FaqContainer, CategoryContainer, ImageContainer, ImageItem }
