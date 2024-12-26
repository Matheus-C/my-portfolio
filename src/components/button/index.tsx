import styled from "styled-components";
import { colors } from "../../global";

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

  &:hover{
    animation: fill 500ms forwards;
  }
  @keyframes fill{
      100%{
        background-color: ${props => props.$color};
        color: ${colors.buttonText};
      }
    }
`
