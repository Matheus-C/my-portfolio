import styled from "styled-components";
import { breakpoints } from "../../global";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 10px 16px;
  @media(min-width: ${breakpoints.desktop}){
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    margin: 10px 128px;
  }
`