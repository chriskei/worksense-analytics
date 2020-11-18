import React from 'react'
import { P } from '../../assets/fonts.js'
import { Email, LinkedIn } from '../../assets/icons'
import {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  Overlay,
  TextOverlay,
  InfoContainer, 
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
        <P>{name}</P>
        <P>{position}</P>
        </LeftContainer>
        <RightContainer>
        <a href={socialMedia} target="_blank"><LinkedIn></LinkedIn></a>
        <a href={email} target="_blank"><Email></Email></a>
        </RightContainer>
      </InfoContainer>
    </ContactCardContainer>
  )
}

export { ContactCard }
