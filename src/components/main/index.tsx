import styled from "styled-components"
import { Container, SubtitleContainer, TextContainer, TitleContainer, TitleLineContainer } from "./Container"
import { photo } from "../../assets"
import { breakpoints } from "../../global"
import { NameTitle, Subtitle, TitleMain } from "../../global/typography"

const Photo = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 4px 2px #F9ABAB;
  border-radius: 200px;
  @media(min-width: ${breakpoints.desktop}){
    width: 300px;
    height: 300px;
    box-shadow: 12px 8px #F9ABAB;
  }
`

export const Main = () => {
  return (
    <Container>
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