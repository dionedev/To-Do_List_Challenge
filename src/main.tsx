import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { darkMode } from "./styles/themes/darkMode";

import { App } from './App.tsx'
import { GlobalStyle } from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkMode}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
