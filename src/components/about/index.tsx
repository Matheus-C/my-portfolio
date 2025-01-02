import { ContentText, SectionTitle } from "../../global/typography"
import { ButtonContainer, Container, ContentContainer, TextContainer } from "./Container"
import { programmer } from "../../assets"
import { aboutText1, aboutText2, aboutText3, aboutText4 } from "./text"
import { Button } from "../button"
import { colors } from "../../global"
import { Dimension } from "../image/dimension"
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
  const imgVariant = {
    initial: { opacity: 0, translateX: "-25%" },
    whileInView: { opacity: 1, translateX: "0%", transition: { bounce: false, ease: "linear", duration: 0.5 } }
  }
  const textVariant = {
    initial: { opacity: 0, translateX: "25%" },
    whileInView: { opacity: 1, translateX: "0%", transition: { bounce: false, ease: "linear", duration: 0.5 } }
  }
  return (
    <Container id="about">
      <SectionTitle>Sobre mim</SectionTitle>
      <ContentContainer>
        <Image $dimensions={dimensions} src={programmer} variants={imgVariant} initial="initial"
          whileInView="whileInView" viewport={{ once: true }} />
        <TextContainer variants={textVariant} initial="initial" whileInView="whileInView"
          viewport={{ once: true }}>
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
        <Button $color={colors.button} $style="fill" onClick={() => window.location.href = "#contact"}>Entrar em contato</Button>
        <Button $color={colors.button} $style="outlined">Baixar Currículo</Button>
      </ButtonContainer>
    </Container>
  )
}