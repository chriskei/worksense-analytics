import React from 'react'
import { Label, LabelText, Input, Textarea } from './field.styles'

const Field = (props) => {
  const { small, label, type, name } = props

  return (
    <Label style={{ display: 'flex', flexDirection: 'column' }}>
      <LabelText>{label}</LabelText>
      {small ? <Input type={type} name={name} /> : <Textarea name={name} />}
    </Label>
  )
}

export { Field }
