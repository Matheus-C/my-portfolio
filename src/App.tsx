import styled from 'styled-components'
import { Main } from './components/main'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

const Container = styled.div`
`

function App() {

  return (
    <Container>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
