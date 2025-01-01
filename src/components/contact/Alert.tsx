import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { ProjectText } from "../../global/typography"
import styled from "styled-components"

const Link = styled.a`
  color: blue;
  text-decoration: none;
`

const MySwal = withReactContent(Swal)

export const Alert = (status: number) => {
  if (status === 200) {
    MySwal.fire({
      title: "Sucesso",
      html: <ProjectText>Mensagem enviada com sucesso.</ProjectText>,
      icon: "success",
    })
  } else {
    MySwal.fire({
      title: "Erro",
      html: <ProjectText>Algo deu errado, tente novamente mais tarde ou se preferir envie um email para <Link href="mailto:matheuscustodio2802@gmail.com">matheuscustodio2802@gmail.com</Link></ProjectText>,
      icon: "error",
    })
  }
}

export const ErrorAlert = (errorMsgs: string[]) => {
  MySwal.fire({
    title: "Erro",
    html: <>{errorMsgs.map((msg, index: number) => <ProjectText key={index}>{msg}</ProjectText>)}</>,
    icon: "error",
  })
}