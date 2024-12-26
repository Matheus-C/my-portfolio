import styled from "styled-components"
import { ContentText, SectionTitle } from "../../global/typography"
import { ButtonContainer, Container, ContentContainer, TextContainer } from "./Container"
import { programmer } from "../../assets"
import { aboutText1, aboutText2, aboutText3, aboutText4 } from "../../assets/text"
import { Button } from "../button"
import { colors } from "../../global"

const Img = styled.img`
  width: 200px;
  height: 200px;
`

export const About = () => {
  return (
    <Container>
      <SectionTitle>Sobre mim</SectionTitle>
      <ContentContainer>
        <Img src={programmer} />
        <TextContainer>
          <ContentText>{aboutText1}</ContentText>
          <br />
          <ContentText>{aboutText2}</ContentText>
          <br />
          <ContentText>{aboutText3}</ContentText>
          <br />
          <ContentText>{aboutText4}</ContentText>
        </TextContainer>
      </ContentContainer>
      <ButtonContainer>
        <Button $color={colors.button} $style="fill">Entrar em contato</Button>
        <Button $color={colors.button} $style="outlined">Baixar Currículo</Button>
      </ButtonContainer>
    </Container>
  )
}