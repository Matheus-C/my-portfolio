import styled from "styled-components";
import { breakpoints, colors } from "../../global";

export const Button = styled.button<{ $style: string, $color: string }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: ${props => props.$style === "outlined" ? "transparent" : props.$color};
  border-width: ${props => props.$style === "outlined" ? "1px" : "0px"};
  border-style: solid;
  border-color: ${props => props.$style === "outlined" ? props.$color : "none"};
  border-radius: 14px;
  font-family: "Iceland";
  font-size: 20px;
  color: ${props => props.$style === "outlined" ? props.$color : colors.buttonText};

  &:active{
    animation: fill 300ms;
  }
  &:not(:active){
    animation: unfill 300ms;
  }
  
  @media(min-width: ${breakpoints.desktop}){
    &:hover{
    animation: fill 500ms forwards;
    }
    &:active{
      animation: unfill 300ms forwards;
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
