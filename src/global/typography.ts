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

export const NavbarText = styled.a`
  font-family: "Iceberg";
  font-size: 16px;
  text-align: center;
  color: ${colors.black};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 32px;
  }
`

export const SectionTitle = styled.h2`
  font-family: "Iceberg";
  font-size: 32px;
  text-align: center;
  color: ${colors.black};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 64px;
  }
`

export const ContentText = styled.p`
  font-family: "Arimo";
  font-size: 16px;
  line-height: 110%;
  text-align: left;
  color: ${colors.black};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 20px;
  }
`

export const ProjectTitle = styled.h2`
  font-family: "Iceberg";
  font-size: 24px;
  text-align: center;
  color: ${colors.black};
`

export const ProjectText = styled.p`
  font-family: "Arimo";
  font-size: 16px;
  text-align: center;
  color: ${colors.black};
`

export const ContactSubtitle = styled.h4`
  font-family: "Iceberg";
  font-size: 12px;
  color: ${colors.black};
  text-align: center;
  @media(min-width: ${breakpoints.desktop}){
    font-size: 24px;
  }
`

export const FormLabel = styled.label`
  font-family: "Iceland";
  font-size: 20px;
  text-align: left;
  color: ${colors.black};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 36px;
  }
`

export const FooterEmail = styled.p`
  font-family: "Iceland";
  font-size: 16px;
  text-align: center;
  color: ${colors.white};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 36px;
  }
`

export const Credits = styled.p`
  font-family: "Roboto";
  font-size: 10px;
  color: ${colors.white};
  @media(min-width: ${breakpoints.desktop}){
    font-size: 20px;
  }
`