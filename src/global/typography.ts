import styled from "styled-components";
import { breakpoints, colors } from ".";

export const TitleMain = styled.h1`
  font-family: "Kode Mono";
  font-weight: 500;
  text-align: left;
  font-size: 20px;
  color: ${colors.black};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 48px;
  }
`

export const NameTitle = styled.h1`
  font-family: "Kode Mono";
  font-weight: 600;
  text-align: left;
  font-size: 20px;
  color: #576CA5;
  @media(min-width: ${breakpoints.desktop}){
    font-size: 48px;
  }
`

export const Subtitle = styled.h3`
  font-family: "Iceland";
  font-weight: 500;
  text-align: center;
  font-size: 16px;
  color: ${colors.black};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 24px;
  }
`