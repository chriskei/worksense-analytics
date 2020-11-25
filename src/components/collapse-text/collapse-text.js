import React, { useState } from 'react'
import { RightArrow, DownArrow } from '../../assets/icons'
import { P } from '../../assets/fonts'
import { colors } from '../../assets/colors'
import {
  CollapseContainer,
  HeaderContainer,
  ArrowContainer,
  BodyContainer
} from './collapse-text.styles'

const CollapseText = (props) => {
  const { header, body } = props
  const [open, setOpen] = useState(false)

  return (
    <CollapseContainer>
      <HeaderContainer onClick={() => setOpen(!open)}>
        <ArrowContainer>{open ? <DownArrow /> : <RightArrow />}</ArrowContainer>
        <P color={open ? colors.blue : colors.darkGreen}>{header}</P>
      </HeaderContainer>
      {open && (
        <BodyContainer>
          <P>{body}</P>
        </BodyContainer>
      )}
    </CollapseContainer>
  )
}

export { CollapseText }
