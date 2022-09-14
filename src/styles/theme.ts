import { createTheme, ComponentsOverrides } from '@mui/material/styles'
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
    }
  }
})
