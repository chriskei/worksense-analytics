import React from 'react'
import { Twitter, LinkedIn } from '../../assets/icons'
import {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  TextOverlay,
  PositionContainer,
  EmailText,
  Email,
  Overlay,
  InfoContainer,
  Icon,
  LeftContainer,
  MemberName,
  MemberPosition,
  RightContainer
} from '../contact-card/contact-card.styles'

const ContactCard = (props) => {
  const {
    name,
    position,
    positionText,
    picture,
    description,
    socialMedia,
    email,
    twitter
  } = props
  return (
    <ContactCardContainer>
      <FlexContainer>
        <MemberImg alt={picture} fluid={picture.fluid} />
        <Overlay>
          <TextOverlay>
            <PositionContainer>{positionText}</PositionContainer>
            {description}
            <EmailText>
              <>Reach me at </>
              <Email href={`mailto:${email}`} target="_blank">
                {email}
              </Email>
            </EmailText>
          </TextOverlay>
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
          <Icon href={twitter} target="_blank">
            <Twitter></Twitter>
          </Icon>
        </RightContainer>
      </InfoContainer>
    </ContactCardContainer>
  )
}

export { ContactCard }
