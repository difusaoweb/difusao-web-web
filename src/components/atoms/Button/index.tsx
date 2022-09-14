import React from 'react'
import { Button as ButtonE } from '@mui/material'

// import styles from './index.module.scss'

interface ButtonProps {
  content: string
  href: string
}
export const Button = ({ content, href }: ButtonProps) => {
  return (
    <ButtonE
      variant="contained"
      size="large"
      href={href}
      // className={styles.button}
    >
      {content}
    </ButtonE>
  )
}
