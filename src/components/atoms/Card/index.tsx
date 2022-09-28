import * as React from 'react'
import { Box } from '@mui/material'

import styles from './index.module.scss'

export const Card = ({ children }) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.cardBody}>{children}</Box>
    </Box>
  )
}
