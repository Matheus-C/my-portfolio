import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../global";


export const Button = styled.button<{ $style: string, $color: string }>`
  text-decoration: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: ${(props) => props.$style === "outlined" ? "transparent" : props.$color};
  border: 1px solid ${(props) => props.$color};
  border-radius: 14px;
  font-family: "Iceland";
  font-size: 20px;
  color: ${(props) => props.$style === "outlined" ? props.$color : colors.buttonText};
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:active:not(:disabled){
    background-color: ${(props) => props.$style === "outlined" ? props.$color : "transparent"};
    color: ${(props) => props.$style === "outlined" ? colors.buttonText : props.$color};
  }
  
  &:disabled{
    background-color: ${colors.sendDisabled};
    cursor: auto;
  }
  
  @media(min-width: ${breakpoints.desktop}){
    &:hover:not(:disabled){
      background-color: ${(props) => props.$style === "outlined" ? props.$color : "transparent"};
      color: ${(props) => props.$style === "outlined" ? colors.buttonText : props.$color};
    }
    &:active:not(:disabled){
      background-color: ${(props) => props.$style === "outlined" ? "transparent" : props.$color};
      color: ${(props) => props.$style === "outlined" ? props.$color : colors.buttonText};
    }
    
  }
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.img`
  width: 20px;
  height:20px;
  animation: ${spin} 500ms infinite linear;
`