import * as React from 'react'
import { Metadata } from 'next'

import { ThemeRegistry } from '@/components/atoms/ThemeRegistry'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: {
    default: 'Difusão Web | Criação e Aprimoramento de Aplicações Mobile e Web',
    template: '%s | Difusão Web'
  },
  description:
    '⚛️ Criação e Aprimoramento de Aplicações Mobile e Web. 👇 Invista em sua ferramenta👇',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
