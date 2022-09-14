import * as React from 'react'
import { Typography, Box } from '@mui/material'

import styles from './index.module.scss'

export const Footer: React.FC = () => {
  return (
    <Box className={styles.footer} component="footer">
      <Typography className={styles.p} variant="body2" component="small">
        Copyright &copy; Difusão Web {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  )
}
