import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'
import { theme } from '@shared-ui'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ChakraProvider>
  </React.StrictMode>
)
