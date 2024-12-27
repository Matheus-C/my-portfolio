import styled from "styled-components";
import { breakpoints, colors } from "../../global";

export const Button = styled.button<{ $style: string, $color: string }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: ${props => props.$style === "outlined" ? "transparent" : props.$color};
  border: 1px solid ${props => props.$color};
  border-radius: 14px;
  font-family: "Iceland";
  font-size: 20px;
  color: ${props => props.$style === "outlined" ? props.$color : colors.buttonText};

  &:active{
    animation: ${props => props.$style === "outlined" ? "fill 300ms" : "unfill 300ms"};
  }
  &:not(:active){
    animation: ${props => props.$style === "outlined" ? "unfill 300ms" : "fill 300ms"};
  }
  
  @media(min-width: ${breakpoints.desktop}){
    &:hover{
    animation: ${props => props.$style === "outlined" ? "fill 500ms forwards" : "none"};
    }
    &:active{
      animation: unfill 300ms forwards;
    }
    &:not(:hover){
      animation: ${props => props.$style === "outlined" ? "unfill 500ms forwards" : "none"};
    }
  }
  @keyframes fill{
      0%{
        background-color: ${props => props.$style === "outlined" ? "transparent" : props.$color};
        color: ${props => props.$style === "outlined" ? props.$color : colors.buttonText};
      }
      100%{
        background-color: ${props => props.$color};
        color: ${colors.buttonText};
      }
    }
    @keyframes unfill{
      0%{
        background-color: ${props => props.$color};
        color: ${colors.buttonText};
      }
      100%{
        background-color: ${props => props.$style === "outlined" ? "transparent" : props.$color};
        color: ${props => props.$style === "outlined" ? props.$color : colors.buttonText};
      }
    }
`
