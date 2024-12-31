import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { ProjectText, ProjectTitle } from "../../global/typography"
import styled from "styled-components"

const Link = styled.a`
  color: blue;
  text-decoration: none;
`

const MySwal = withReactContent(Swal)

export const Alert = (status: number) => {
  if (status === 200) {
    MySwal.fire({
      title: <ProjectTitle>Sucesso</ProjectTitle>,
      html: <ProjectText>Mensagem enviada com sucesso.</ProjectText>,
      icon: "success",
    })
  } else {
    MySwal.fire({
      title: <ProjectTitle>Erro</ProjectTitle>,
      html: <ProjectText>Algo deu errado, tente novamente mais tarde ou se preferir envie um email para <Link href="mailto:matheuscustodio2802@gmail.com">matheuscustodio2802@gmail.com</Link></ProjectText>,
      icon: "error",
    })
  }
}