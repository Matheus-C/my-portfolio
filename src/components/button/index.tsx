import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../global";

const select = ($style: string, $color: string) => keyframes`
  0%{
      background-color: ${$style === "outlined" ? "transparent" : $color};
      color: ${$style === "outlined" ? $color : colors.buttonText};
    }
    100%{
      background-color: ${$style === "outlined" ? $color : "transparent"};
      color: ${$style === "outlined" ? colors.buttonText : $color};
    }
`

export const Button = styled.button<{ $style: string, $color: string }>`
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

  &:active:not(:disabled){
    animation: ${(props) => select(props.$style, props.$color)} ${(props) => props.$style === "outlined" ? "linear 300ms" : "linear 300ms"};
  }
  
  &:disabled{
    background-color: ${colors.sendDisabled};
    cursor: auto;
  }
  
  @media(min-width: ${breakpoints.desktop}){
    &:hover:not(:disabled){
      animation: ${(props) => select(props.$style, props.$color)} ${(props) => props.$style === "outlined" ? " 300ms linear 0s forwards" : " 300ms linear 0s forwards"};
    }
    &:active:not(:disabled){
      animation: ${(props) => select(props.$style, props.$color)} ${(props) => props.$style === "outlined" ? " 300ms linear 0s reverse forwards" : " 300ms linear 0s reverse forwards"};
    }
    
  }
  @keyframes select{
      0%{
        background-color: ${(props) => props.$style === "outlined" ? "transparent" : props.$color};
        color: ${(props) => props.$style === "outlined" ? props.$color : colors.buttonText};
      }
      100%{
        background-color: ${(props) => props.$style === "outlined" ? props.$color : "transparent"};
        color: ${(props) => props.$style === "outlined" ? colors.buttonText : props.$color};
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