import React from 'react'
import { Label, LabelText, Input, TextArea } from './field.styles'

const Field = (props) => {
  const { small, label, type, name } = props

  return (
    <Label style={{ display: 'flex', flexDirection: 'column' }}>
      <LabelText>{label}</LabelText>
      {small ? <Input type={type} name={name} /> : <TextArea name={name} />}
    </Label>
  )
}

export { Field }
