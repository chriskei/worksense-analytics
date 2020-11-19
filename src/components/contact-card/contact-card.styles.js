import styled from 'styled-components'
import Img from 'gatsby-image'

const fonts = {
  manrope: `'Manrope Extra Bold', 'Manrope', 'Arial',
    Arial, sans-serif`,
  poppins: `'Poppins', sans-serif`
}

const fontSizes = {
  name: `calc(16px + (38 - 16) * ((100vw - 375px) / (1920 - 375)))`,
  position: `calc(13px + (22 - 13) * ((100vw - 375px) / (1920 - 375)))`
}

const ContactCardContainer = styled.div`
  margin: auto;
  height: 40rem;
  width: 30rem;
  z-index: 1;
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
  border-radius: 5px;
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
  transition: 0.5s ease;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.55);
  }
`

const InfoContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
`

const Icon = styled.a`
  margin-left: 1rem;
`

const LeftContainer = styled.div``

const MemberName = styled.h2`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.name};
  color: ${(props) => props.color};
  margin: auto;
  padding-top: 1rem;
`

const MemberPosition = styled.p`
  font-family: ${fonts.poppins};
  font-size: ${fontSizes.position};
  color: ${(props) => props.color};
  margin: auto;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
`

export {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  TextOverlay,
  Overlay,
  InfoContainer,
  Icon,
  LeftContainer,
  MemberName,
  MemberPosition,
  RightContainer
}
