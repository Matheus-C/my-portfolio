import { ContentText, SectionTitle } from "../../global/typography"
import { ButtonContainer, Container, ContentContainer, TextContainer } from "./Container"
import { programmer } from "../../assets"
import { aboutText1, aboutText2, aboutText3, aboutText4 } from "../../assets/text"
import { Button } from "../button"
import { colors } from "../../global"
import { Dimension } from "../../global/dimension"
import { Image } from "../image"


const dimensions: Dimension = {
  desktop: {
    height: "200px",
    width: "200px"
  },
  mobile: {
    height: "200px",
    width: "200px"
  }
}

export const About = () => {
  return (
    <Container>
      <SectionTitle>Sobre mim</SectionTitle>
      <ContentContainer>
        <Image $dimensions={dimensions} src={programmer} />
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