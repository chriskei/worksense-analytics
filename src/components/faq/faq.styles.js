import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../../assets/colors'
import { H3 } from '../../assets/fonts'
import { devices } from '../../assets/devices'
import { animations } from '../../assets/animations'

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media ${devices.mobile} {
    margin: auto 1rem auto 1rem;
  }
  @media ${devices.tablet} {
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
  @media ${devices.mobile} {
    height: 7rem;
    width: 7rem;
  }
  @media ${devices.tablet} {
    height: 17rem;
    width: 17rem;
  }
`

const ImageItem = styled(Img)`
  @media ${devices.mobile} {
    max-height: 7rem;
    max-width: 7rem;
  }
  @media ${devices.tablet} {
    max-height: 17rem;
    max-width: 17rem;
  }
`

const fadeIn = keyframes`
  0% { opacity: 0%; max-height: 0; }
  100% { opacity: 100%; max-height: ${animations.faqQuestionsHeight}; }
`

const fadeOut = keyframes`
  0% { opacity: 100%; max-height: ${animations.faqQuestionsHeight}; }
  100% { opacity: 0%; max-height: 0; }
`

const ExpandedContainer = styled.div`
  margin: auto;
  animation: ${(props) => (props.out ? fadeOut : fadeIn)}
    ${animations.faqFadeLength}s 1;
  @media ${devices.mobile} {
    width: 20rem;
  }
  @media ${devices.tablet} {
    width: 40rem;
  }
  @media ${devices.desktop} {
    width: 64.375rem;
  }
`

const SelectedCategory = styled(H3)`
  margin: 4rem 0 1rem 0.25rem;
  @media ${devices.tablet} {
    margin-left: 0.75rem;
  }
  @media ${devices.desktop} {
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
