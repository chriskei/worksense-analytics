import React from 'react'
import {
  FlexContainer,
  MemberImg,
  TextContainer,
  InfoContainer,
  Name,
  Position
} from '../contact-card/contact-card.styles'

const ContactCard = (props) => {
  const { name, position, picture, description, socialMedia, email } = props
  return (
    <>
      <FlexContainer>
        <MemberImg alt={picture} fluid={picture.fluid} />
        <TextContainer>
          <p>{description}</p>
          <p>{socialMedia}</p>
        </TextContainer>
      </FlexContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <p>{email}</p>
      </InfoContainer>
    </>
  )
}

export { ContactCard }
