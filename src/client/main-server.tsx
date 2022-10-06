import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { Home } from './pages/index'
import { theme } from './styles/theme'
import './styles/global.scss'

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StaticRouter location={url}>
          <CssBaseline />
          <Home />
        </StaticRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}
