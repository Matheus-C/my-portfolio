import styled from "styled-components";
import { breakpoints } from "../../global";


export const Container = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 10px;
  margin: 0 10px 16px;
  flex-direction: column;
  @media(min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    margin: -60px 80px 10px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  opacity: 0;
  animation: 500ms appear linear 1s forwards;
  @media(min-width: ${breakpoints.desktop}) {
    padding: 0px 48px 0px;
  }

  @keyframes appear{
    to{
      opacity: 1;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const TitleLineContainer = styled.div`
  display: flex;
  gap: 16px;
  @media(min-width: ${breakpoints.desktop}) {
    gap: 32px;
  }
`

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`