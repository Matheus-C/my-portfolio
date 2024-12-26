import styled from 'styled-components'
import { Main } from './components/main'
import { About } from './components/about'

const Container = styled.div`
`

function App() {

  return (
    <Container>
      <Main />
      <About />
    </Container>
  )
}

export default App
