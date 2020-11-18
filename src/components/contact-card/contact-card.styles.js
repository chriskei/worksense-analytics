import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../../assets/colors'

const ContactCardContainer = styled.div`
  margin: auto;
  height: 42rem;
  width: 32.5rem;
`
const FlexContainer = styled.div`
  display: flex;
  position: relative;
  width: auto;
`

const MemberImg = styled(Img)`
  display: block;
  width: 100%;
  height: auto;
`

const TextOverlay = styled.p`
  position: absolute;
  padding: 3rem;
`

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(255, 255, 255, 0);

&:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, .55);
}
`

const InfoContainer = styled.div`
  width: auto;
  height: auto;
`

const LeftContainer = styled.div`
  float: left;
`

const RightContainer = styled.div`
  float: right;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

export {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  TextOverlay,
  Overlay,
  LeftContainer,
  RightContainer,
  InfoContainer,
}
