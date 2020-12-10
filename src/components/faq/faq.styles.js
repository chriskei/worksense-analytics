import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../../assets/colors'
import { H3 } from '../../assets/fonts'
import { devices } from '../../assets/devices'
import { animations } from '../../assets/animations'

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  position: relative;
  @media ${devices.mobile} {
    max-width: 11rem;
    top: 6rem;
  }
  @media ${devices.tablet} {
    max-width: 22rem;
    top: -1.5rem;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    max-width: 52rem;
    top: 5rem;
  }
  @media ${devices.desktop} {
    max-width: 64.375rem;
    top: 4rem;
  }
`

const ImageContainer = styled.div`
  z-index: 1;
  cursor: pointer;
  @media ${devices.laptop} {
    margin: 1rem;
  }
  @media ${devices.desktop} {
    margin: 2rem;
  }
`

const ImageBox = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.color};
  box-shadow: 0px 4px 10px ${colors.darkGray};
  @media ${devices.mobile} {
    height: 9rem;
    width: 9rem;
  }
  @media ${devices.tablet} {
    height: 20rem;
    width: 20rem;
  }
  @media ${devices.laptop} {
    height: 13rem;
    width: 13rem;
  }
  @media ${devices.desktop} {
    height: 15.25rem;
    width: 15.25rem;
  }
`

const ImageItem = styled(Img)`
  @media ${devices.mobile} {
    max-height: 9rem;
    max-width: 9rem;
  }
  @media ${devices.tablet} {
    max-height: 20rem;
    max-width: 20rem;
  }
  @media ${devices.laptop} {
    max-height: 13rem;
    max-width: 13rem;
  }
  @media ${devices.desktop} {
    max-height: 15.25rem;
    max-width: 15.25rem;
  }
`

const ImageCategory = styled(H3)`
  @media ${devices.mobile} {
    margin: 1rem 0 2rem 0;
    width: 9rem;
  }
  @media ${devices.tablet} {
    margin: 1rem 0 3rem 0;
    width: 20rem;
  }
  @media ${devices.laptop} {
    margin: 1rem 0 0 0;
    width: 13rem;
  }
  @media ${devices.desktop} {
    width: 15.25rem;
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
    padding-top: 5rem;
  }
  @media ${devices.tablet} {
    width: 40rem;
    padding-top: 0;
  }
  @media ${devices.laptop} {
    width: 52rem;
    padding: 5rem 0 3rem 0;
  }
  @media ${devices.desktop} {
    width: 64.375rem;
    padding-bottom: 0;
  }
`

const SelectedCategory = styled(H3)`
  margin: 4rem 0 1rem 0;
  @media ${devices.tablet} {
    padding-left: 1rem;
  }
  @media ${devices.desktop} {
    padding-left: 2rem;
  }
`

export {
  CategoryContainer,
  ImageContainer,
  ImageBox,
  ImageItem,
  ImageCategory,
  ExpandedContainer,
  SelectedCategory
}
