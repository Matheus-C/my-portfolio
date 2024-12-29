import { Credits, FooterEmail } from "../../global/typography"
import { Container, ContentContainer, CreditsContainer, GroupContainer } from "./Container"
import { Envelope, Github, Linkedin } from "./Icons"


export const Footer = () => {
  return (
    <Container>
      <ContentContainer>
        <Github onClick={() => window.open("https://github.com/Matheus-C", "_blank")} />
        <Linkedin onClick={() => window.open("https://www.linkedin.com/in/matheus-oliveira-61086b221", "_blank")} />
        <GroupContainer onClick={(e) => { window.location.href = "mailto:matheuscustodio2802@gmail.com"; e.preventDefault(); }}>
          <Envelope />
          <FooterEmail>
            matheuscustodio2802@gmail.com
          </FooterEmail>
        </GroupContainer>
      </ContentContainer>
      <CreditsContainer>
        <Credits>Desenvolvido por Matheus Custódio</Credits>
      </CreditsContainer>
    </Container >
  )
}