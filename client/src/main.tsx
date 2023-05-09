import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider } from '@chakra-ui/react'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
