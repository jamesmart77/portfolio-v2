import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, defaultConfig, defineConfig, createSystem } from '@chakra-ui/react'
import App from './App.jsx'


const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(defaultConfig, config)
// Custom theme for dark mode
// const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   },
//   styles: {
//     global: {
//       body: {
//         bg: 'gray.900',
//         color: 'white',
//       },
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)