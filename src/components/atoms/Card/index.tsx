import * as React from 'react'
import { CardContent, Card as CardMui } from '@mui/material'

import styles from './index.module.scss'

interface CardProps {
  children: React.ReactNode
}
export const Card = ({ children }: CardProps) => {
  return (
    <CardMui className={styles.card}>
      <CardContent className={styles.cardBody}>{children}</CardContent>
    </CardMui>
  )
}
