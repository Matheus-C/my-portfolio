import styled from "styled-components";
import { breakpoints } from "../../global";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 48px 16px 0;
  @media(min-width: ${breakpoints.desktop}){
    margin: 64px 128px 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  @media(min-width: ${breakpoints.tablet}){
    flex-direction: row;
    gap: 56px;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 0 24px;
  @media(min-width: ${breakpoints.desktop}){
    gap: 32px 32px;
    padding: 0;
  }
`