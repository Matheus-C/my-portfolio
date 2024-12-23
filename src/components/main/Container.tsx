import styled from "styled-components";
import { breakpoints, mobileSectionSpacing } from "../../global";


export const Container = styled.div`
  margin-bottom: ${mobileSectionSpacing};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  gap: 10px;
  padding: 16px 10px;
  flex-direction: column;
  @media(min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    padding: 10px 80px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  @media(min-width: ${breakpoints.desktop}) {
    padding: 0px 48px;
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