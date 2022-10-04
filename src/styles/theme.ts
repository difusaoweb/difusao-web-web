import { createTheme } from '@mui/material/styles'
import vars from './_variables.module.scss'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: vars?.['theme-palette-primary-main']
    },
    secondary: {
      main: vars?.['theme-palette-secondary-main']
    },
    success: {
      main: vars?.['theme-palette-success-main']
    },
    error: {
      main: vars?.['theme-palette-error-main']
    },
    warning: {
      main: vars?.['theme-palette-warning-main']
    },
    info: {
      main: vars?.['theme-palette-info-main']
    },
    background: {
      default: vars?.['theme-palette-background-default'],
      paper: vars?.['theme-palette-background-paper']
    },
    text: {
      primary: vars?.['theme-palette-text-primary']
    }
  },
  typography: {
    h1: {
      color: vars?.['theme-typography-h1-color'],
      fontWeight: vars?.['theme-typography-h1-font-weight'],
      fontSize: vars?.['theme-typography-h1-font-size']
    },
    h2: {
      color: vars?.['theme-typography-h2-color'],
      fontWeight: vars?.['theme-typography-h2-font-weight'],
      fontSize: vars?.['theme-typography-h2-font-size']
    },
    h3: {
      color: vars?.['theme-typography-h3-color'],
      fontWeight: vars?.['theme-typography-h3-font-weight'],
      fontSize: vars?.['theme-typography-h3-font-size']
    },
    h4: {
      color: vars?.['theme-typography-h4-color'],
      fontWeight: vars?.['theme-typography-h4-font-weight'],
      fontSize: vars?.['theme-typography-h4-font-size']
    }
  }
})
