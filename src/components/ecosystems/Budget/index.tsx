import * as React from 'react'
import { Container, Box, Stack, Typography } from '@mui/material'

import {Button} from '../../atoms/Button'
import { contacts } from '../../../store/contacts'
import styles from './index.module.scss'

export const Budget: React.FC = () => {
  return (
    <Box className={styles.section} component="section">
      <Container maxWidth="lg" className={styles.container}>
        <Typography
          component="h2"
          variant="h2"
          className={styles.h2}
        >
          Solicite seu orçamento
        </Typography>
        <Button content="Whatsapp" href={contacts.whatsapp} size="large" className={styles.button} />
      </Container>
    </Box>
  )
}
