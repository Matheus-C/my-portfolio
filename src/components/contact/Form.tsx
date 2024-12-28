import styled from "styled-components";
import { breakpoints, colors } from "../../global";
import React, { useState } from "react";
import { FormLabel } from "../../global/typography";
import { Button, Spinner } from "../button";
import { FaPaperPlane } from "react-icons/fa"
import { spinner, spinnerDots } from "../../assets";
interface FormData {
  name: string,
  email: string,
  message: string
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  width: 100%;
  @media(min-width: ${breakpoints.desktop}){
    gap: 24px;
    padding: 10px 10px 10px 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: center;
`



interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // errorMessage: string;
  // error: boolean;
}
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  // errorMessage: string;
  // error: boolean;
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Input = styled.input`
  min-width: 210px;
  background-color: #FEFEFE;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-width: 0;
  min-width: 70%;
  min-height: 20px;
  @media(min-width: ${breakpoints.tablet}){
    min-width: 80%;
  }
  @media(min-width: ${breakpoints.desktop}){
    min-height: 35px;
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const TextArea = styled.textarea`
  min-width: 210px;
  background-color: #FEFEFE;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  min-height: 80px;
  border-radius: 10px;
  min-width: 70%;
  border-width: 0;
  @media(min-width: ${breakpoints.tablet}){
    min-width: 80%;
  }
  @media(min-width: ${breakpoints.desktop}){
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 150px;
  }
`

const InputGroup: React.FC<InputProps> = ({ label, type, id, value, ...rest }) => {
  return (
    <InputWrapper>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input type={type} id={id} name={id} value={value} {...rest} />
    </InputWrapper>
  )
}

const TextAreaGroup: React.FC<TextAreaProps> = ({ label, id, value, ...rest }) => {
  return (
    <InputWrapper>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <TextArea id={id} name={id} value={value} {...rest} />
    </InputWrapper>
  )
}


export const Form = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    try {
      const response = await fetch('', {
        body: JSON.stringify({
          formData
        }),
        method: "POST"
      });
    } catch (e) {
      console.error(e);
    }
    setIsDisabled(false);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup label="Nome" type="text" id="name" value={formData.name} onChange={handleChange} />
      <InputGroup label="Email" type="email" id="email" value={formData.email} onChange={handleChange} />
      <TextAreaGroup label="Mensagem" id="message" value={formData.message} onChange={handleChange} />
      <ButtonContainer>
        {isDisabled ? <Button $color={colors.buttonSend} $style="send" disabled={isDisabled}> <Spinner src={spinner} /> </Button> : <Button $color={colors.buttonSend} $style="normal" disabled={isDisabled}> <FaPaperPlane /> Enviar</Button>}
      </ButtonContainer>
    </FormContainer>
  )
}