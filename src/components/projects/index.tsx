import { projects } from "../../assets/projects"
import { SectionTitle } from "../../global/typography"
import { Card } from "./Card"
import { Container, ContentContainer } from "./Container"

export const Projects = () => {
  return (
    <Container>
      <SectionTitle>Projetos</SectionTitle>
      <ContentContainer>
        {projects.map(project => <Card {...project} />)}
      </ContentContainer>
    </Container>
  )
}