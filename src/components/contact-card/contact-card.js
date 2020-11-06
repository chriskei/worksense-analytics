import React from 'react'
import {
  FlexContainer,
  MemberImg,
  LeftContainer,
  RightContainer,
  InfoContainer,
  Name,
  Position
} from '../contact-card/contact-card.styles'

const ContactCard = (props) => {
  const { name, position, picture, description, links } = props
  return (
    <>
      <FlexContainer>
        <LeftContainer>
          <MemberImg alt="Member Picture" fluid={picture} />
        </LeftContainer>
        <RightContainer>
          <p>{description}</p>
          <p>{links}</p>
        </RightContainer>
      </FlexContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </InfoContainer>
    </>
  )
}

export { ContactCard }
