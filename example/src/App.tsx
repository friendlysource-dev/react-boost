import React from 'react'

import { ChakraProvider, Heading } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MasterPage from './components/MasterPage'
import { theme } from './configs'
import { Row } from '@friendlyss/react-boost'
import LogoHorizontal from './components/LogoHorizontal'

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <MasterPage>
            <Row>
              <LogoHorizontal />
            </Row>
            <Heading mt={8}>{`📚`} Coming Soon!</Heading>
          </MasterPage>
        </Router>
      </ChakraProvider>
    </>
  )
}

export default App
