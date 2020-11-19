import React from 'react'
import { Subheader, MemberName, MemberPosition } from '../../assets/fonts.js'
import { Email, LinkedIn } from '../../assets/icons'
import {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  Overlay,
  TextOverlay,
  InfoContainer,
  Icon,
  RightContainer,
  LeftContainer
} from '../contact-card/contact-card.styles'

const ContactCard = (props) => {
  const { name, position, picture, description, socialMedia, email } = props
  return (
    <ContactCardContainer>
      <FlexContainer>
        <MemberImg alt={picture} fluid={picture.fluid} />
        <Overlay>
          <TextOverlay>{description}</TextOverlay>
        </Overlay>
      </FlexContainer>
      <InfoContainer>
        <LeftContainer>
          <MemberName>{name}</MemberName>
          <MemberPosition>{position}</MemberPosition>
        </LeftContainer>
        <RightContainer>
          <Icon href={socialMedia} target="_blank">
            <LinkedIn></LinkedIn>
          </Icon>
          <Icon href={email} target="_blank">
            <Email></Email>
          </Icon>
        </RightContainer>
      </InfoContainer>
    </ContactCardContainer>
  )
}

export { ContactCard }
