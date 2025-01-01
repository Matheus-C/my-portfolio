import styled from "styled-components";
import { breakpoints } from "../../global";
import { motion } from "motion/react";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 32px 16px 0;
  @media(min-width: ${breakpoints.desktop}){
    justify-content: left;
    gap: 32px;
    margin: 32px 128px 0;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
  padding: 32px 10px;
  @media(min-width: ${breakpoints.tablet}){
    flex-direction: row;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  @media(min-width: ${breakpoints.desktop}){
    gap: 40px;
    flex-direction: row;
  }
`

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`