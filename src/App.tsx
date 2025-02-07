import styled from 'styled-components'
import { Main } from './components/main'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'

const Container = styled.div`
`

function App() {

  return (
    <Container>
      <Navbar />
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
