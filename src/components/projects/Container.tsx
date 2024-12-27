import styled from "styled-components";
import { breakpoints } from "../../global";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 32px 16px;
  @media(min-width: ${breakpoints.desktop}){
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    margin: 32px 128px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
  padding: 32px 10px;
  @media(min-width: ${breakpoints.desktop}){
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    gap: unset;
  }
`