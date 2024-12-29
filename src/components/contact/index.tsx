import { ContactSubtitle, SectionTitle } from "../../global/typography"
import { Container } from "./Container"
import { Form } from "./Form"


export const Contact = () => {
  return (
    <Container id="contact">
      <SectionTitle>Entre em contato</SectionTitle>
      <ContactSubtitle>Preenchendo este formulário é uma forma prática e rápida para me enviar
        um email, se você quiser pode me enviar um email da forma tradicional, o endereço está
        no rodapé
      </ContactSubtitle>
      <Form />
    </Container>
  )
}