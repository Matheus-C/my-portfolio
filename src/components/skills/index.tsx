import { programming, skills } from "../../assets/skills"
import { Dimension } from "../image/dimension"
import { SectionTitle } from "../../global/typography"
import { Image } from "../image"
import { Container, ContentContainer, IconsContainer } from "./Container"
import { Tooltip } from "react-tooltip"

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
  const iconVariant = {
    initial: { scale: 0.1 },
    whileInView: {
      scale: 1,
      transition: { bounce: false, ease: "linear", duration: 0.5 }
    }
  }

  const imgVariant = {
    initial: { opacity: 0, translateX: "-25%" },
    whileInView: { opacity: 1, translateX: "0%", transition: { bounce: false, ease: "linear", duration: 0.5 } }
  }
  return (
    <Container id="skills">
      <SectionTitle>Skills</SectionTitle>
      <ContentContainer>
        <Image $dimensions={imgDimension} src={programming} variants={imgVariant} initial="initial"
          whileInView="whileInView" viewport={{ once: true }} />
        <IconsContainer>
          {skills.map(skill => <div key={skill.name}><Image $dimensions={logoDimensions} src={skill.src} variants={iconVariant} initial="initial"
            whileInView="whileInView" viewport={{ once: true }} $hover={true} data-tooltip-id={skill.name} data-tooltip-content={skill.name} /> <Tooltip id={skill.name} /></div>)}
        </IconsContainer>
      </ContentContainer>
    </Container>
  )
}