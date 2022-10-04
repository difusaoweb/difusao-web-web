import * as React from 'react'
import { Box } from '@mui/material'

import styles from './index.module.scss'

interface CardProps {
  children: React.ReactNode
}
export const Card = ({ children }: CardProps) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.cardBody}>{children}</Box>
    </Box>
  )
}
