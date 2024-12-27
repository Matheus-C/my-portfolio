import styled from 'styled-components'
import { Main } from './components/main'
import { About } from './components/about'
import { Skills } from './components/skills'

const Container = styled.div`
`

function App() {

  return (
    <Container>
      <Main />
      <About />
      <Skills />
    </Container>
  )
}

export default App
