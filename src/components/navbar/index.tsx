import { Container, ContainerNav } from "./Container"
import { Content, MobileMenu } from "./Content"


export const Navbar = () => {
  return (
    <Container>
      <ContainerNav id="navbar">
        <Content />
      </ContainerNav>
      <MobileMenu />
    </Container>
  )
}