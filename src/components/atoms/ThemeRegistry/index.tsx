'use client'

import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir'

import { theme } from '@/styles/theme'

export const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  )
}
