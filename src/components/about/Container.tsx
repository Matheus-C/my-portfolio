import styled from "styled-components";
import { breakpoints } from "../../global";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px 16px;
  @media(min-width: ${breakpoints.desktop}){
    justify-content: left;
    gap: 32px;
    padding: 32px 128px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
  padding: 32px 10px;
  @media(min-width: ${breakpoints.desktop}){
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`