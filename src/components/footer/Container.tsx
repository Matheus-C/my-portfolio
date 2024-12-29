import styled from "styled-components";
import { breakpoints, colors } from "../../global";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 10px 0 0;
  background-color: ${colors.black};
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 16px;
  @media(min-width: ${breakpoints.desktop}){
    min-height: 150px;
    gap: 16px;
    margin: 50px 0 0;
    padding: 10px 128px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0;
  @media(min-width: ${breakpoints.desktop}){
    justify-content: left;
    gap: 32px;
  }
`

export const CreditsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: center;
  gap: 10px;
`

export const GroupContainer = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px 0;
  cursor: pointer;
  @media(min-width: ${breakpoints.desktop}){
    gap: 10px;
  }
`