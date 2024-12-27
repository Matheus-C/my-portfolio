import styled from "styled-components";
import { breakpoints } from "../../global";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 32px 16px 0;
  @media(min-width: ${breakpoints.desktop}){
    margin: 32px 128px 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 10px;
  @media(min-width: ${breakpoints.desktop}){
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
  @media(min-width: ${breakpoints.desktop}){
    gap: 32px 32px;
  }
`