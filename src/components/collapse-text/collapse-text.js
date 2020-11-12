import React, { useState } from 'react'
import { RightArrow, DownArrow } from '../../assets/icons'
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
        <h3>{header}</h3>
      </HeaderContainer>
      {open && (
        <BodyContainer>
          <h4>{body}</h4>
        </BodyContainer>
      )}
    </CollapseContainer>
  )
}

export { CollapseText }
