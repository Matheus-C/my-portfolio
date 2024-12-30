import styled from "styled-components"
import { Container, SubtitleContainer, TextContainer, TitleContainer, TitleLineContainer } from "./Container"
import { photo } from "../../assets"
import { breakpoints } from "../../global"
import { NameTitle, Subtitle, TitleMain } from "../../global/typography"

const Photo = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 30vh;
  box-shadow: 4px 2px #F9ABAB;
  border-radius: 200px;
  opacity: 0;
  z-index: -1;
  animation: 
  levitate 700ms linear alternate infinite,
  rotate linear 1s forwards;
  
  @media(min-width: ${breakpoints.desktop}){
    top: auto;
    position: relative;
    width: 300px;
    height: 300px;
    box-shadow: 12px 8px #F9ABAB;
  }
  @keyframes rotate{
    0%{
      transform: rotate(0);
      opacity: 0;
    }
    50%{
      opacity: 0;
    }
    100%{
      transform: rotate(1turn);
      opacity: 100%;
    }
  }
  @keyframes levitate{
    0%{
      margin: -5px 0 0 0;
      @media(min-width: ${breakpoints.desktop}){
        margin: -10px 0 0 0;
      }
    }
    50%{
      margin: 0 0 0 0;
    }
    100%{
      margin: 5px 0 0 0;
      @media(min-width: ${breakpoints.desktop}){
        margin: 10px 0 0 0;
      }
    }
  }
`

export const Main = () => {
  return (
    <Container id="home">
      <Photo src={photo} />
      <TextContainer>
        <TitleContainer>
          <TitleLineContainer>
            <TitleMain>Olá, sou</TitleMain><NameTitle>Matheus Custódio</NameTitle>
          </TitleLineContainer>
          <TitleLineContainer>
            <TitleMain>Desenvolvedor Fullstack</TitleMain>
          </TitleLineContainer>
        </TitleContainer>
        <SubtitleContainer>
          <Subtitle>Graduando em sistemas de informação pela Universidade Federal Fluminense - UFF</Subtitle>
        </SubtitleContainer>
      </TextContainer>
    </Container>
  )
}