import { programming, skills } from "../../assets/skills"
import { Dimension } from "../image/dimension"
import { SectionTitle } from "../../global/typography"
import { Image } from "../image"
import { Container, ContentContainer, IconsContainer } from "./Container"

const logoDimensions: Dimension = {
  desktop: {
    height: "60px",
    width: "auto"
  },
  mobile: {
    height: "40px",
    width: "auto"
  }
}
const imgDimension: Dimension = {
  desktop: {
    width: "480px",
    height: "auto"
  },
  mobile: {
    width: "270px",
    height: "auto"
  }
}

export const Skills = () => {
  return (
    <Container id="skills">
      <SectionTitle>Skills</SectionTitle>
      <ContentContainer>
        <Image $dimensions={imgDimension} src={programming} />
        <IconsContainer>
          {skills.map(skill => <Image $dimensions={logoDimensions} key={skill.name} src={skill.src} />)}
        </IconsContainer>
      </ContentContainer>
    </Container>
  )
}