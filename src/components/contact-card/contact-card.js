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
  const { name, position, picture, description, socialMedia } = props
  return (
      <>
      <FlexContainer>
        <MemberImg alt={picture.title} fluid={picture.fluid} />
        <TextContainer>
          <p>{description}</p>
          <p>{socialMedia}</p>
        </TextContainer>
      </FlexContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </InfoContainer>
      </>
  )
}

export { ContactCard }
