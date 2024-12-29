import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"
import { breakpoints } from "../../global"
import { colors } from "../../global"

export const Github = styled(FaGithub)`
  width: 16px;
  height: 16px;
  color: ${colors.white};
  cursor: pointer;
  @media(min-width: ${breakpoints.desktop}){
    width: 35px;
    height: 35px;
  }
`

export const Linkedin = styled(FaLinkedin)`
  width: 16px;
  height: 16px;
  color: ${colors.white};
  cursor: pointer;
  @media(min-width: ${breakpoints.desktop}){
    width: 35px;
    height: 35px;
  }
`

export const Envelope = styled(FaEnvelope)`
  width: 16px;
  height: 16px;
  color: ${colors.white};
  @media(min-width: ${breakpoints.desktop}){
    width: 35px;
    height: 35px;
  }
`