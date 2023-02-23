import * as React from 'react'
import { Button as ButtonE } from '@mui/material'

interface ButtonProps {
  content: string
  href: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}
export const Button = ({ content, href, className, size }: ButtonProps) => {
  return (
    <ButtonE
      variant="contained"
      href={href}
      className={className}
      // className={{...styles.button, ...className}}
      size={size}
    >
      {content}
    </ButtonE>
  )
}
