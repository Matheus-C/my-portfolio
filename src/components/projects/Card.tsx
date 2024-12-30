import styled from "styled-components"
import { Image } from "../image"
import { Dimension } from "../image/dimension"
import { ProjectText, ProjectTitle } from "../../global/typography"
import { Button } from "../button"
import { colors } from "../../global"
import { Project } from "../../global/project"
import { motion } from "motion/react"

const ContainerCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px;
  padding-bottom: 16px;
  background-color: ${colors.backgroundProject};
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px 16px;
  justify-content: space-between;
  align-items: center;
`

const imgDimension: Dimension = {
  desktop: {
    width: "100%",
    height: "153px",
    borderRadius: "12px 12px 0 0"
  },
  mobile: {
    width: "100%",
    height: "153px",
    borderRadius: "12px 12px 0 0"
  }
}

export const Card = (project: Project) => {
  return (
    <ContainerCard initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { bounce: false, ease: "linear", duration: 1 } }}
      viewport={{ once: true }}>
      <Image $dimensions={imgDimension} src={project.img} />
      <ContentContainer>
        <ProjectTitle>
          {project.title}
        </ProjectTitle>
        <ProjectText>
          {project.text}
        </ProjectText>
      </ContentContainer>
      <Button $color={colors.button} $style={project.buttonStyle} onClick={() => window.open(project.url, "_blank")}>{project.buttonText}</Button>
    </ContainerCard>
  )
}