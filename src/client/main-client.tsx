import * as React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

import { Home } from './pages/index'
import { theme } from './styles/theme'
import './styles/global.scss'

const container = document.getElementById('root')

const FullApp = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

if (import.meta.hot != null || !container?.innerText) {
  const root = createRoot(container!)
  root.render(<FullApp />)
} else {
  hydrateRoot(container, <FullApp />)
}
