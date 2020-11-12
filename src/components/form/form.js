import React from 'react'
import { Field } from '../field/field'
import {
  FormContainer,
  LeftContainer,
  RightContainer,
  ButtonContainer,
  Button
} from './form.styles'

const Form = (props) => {
  const { name, submitText } = props

  return (
    <FormContainer
      name={name}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input value={name} name="form-name" type="hidden" />
      <LeftContainer>
        <Field small={true} name="name" label="Name" type="text" />
        <Field small={true} name="email" label="Email" type="email" />
        <Field small={true} name="company" label="Company" type="text" />
        <Field small={true} name="job" label="Job Title" type="text" />
      </LeftContainer>
      <RightContainer>
        <Field small={false} name="message" label="Message" />
        <ButtonContainer>
          <Button>{submitText}</Button>
        </ButtonContainer>
      </RightContainer>
    </FormContainer>
  )
}

export { Form }
