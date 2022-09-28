import * as React from 'react'
import { Button as ButtonE } from '@mui/material'

import styles from './index.module.scss'

interface ButtonProps {
  content: string
  href: string
  className?: string
  size?: string
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
