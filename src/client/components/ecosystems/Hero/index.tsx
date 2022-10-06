import * as React from 'react'
import { Box, Container, Typography, Stack } from '@mui/material'

import { Button } from '../../atoms/Button'
import styles from './index.module.scss'
import HeroImageUrl from '../../../assets/images/hero/hero.jpg?url&ts-ignore'
import { contacts } from '../../../store/contacts'
import { theme } from '../../../styles/theme'

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{ backgroundImage: `url(${HeroImageUrl})` }}
      className={styles.section}
      component="section"
    >
      <Box className={styles.BackgoundOpacity} />
      <Container maxWidth="lg" className={styles.container}>
        <Typography variant="h1" component="h1" className={styles.h1}>
          Torne{' '}
          <Box className={styles.colorError} component="span">
            processos manuais
          </Box>{' '}
          mais{' '}
          <Box className={styles.colorSuccess} component="span">
            simples
          </Box>
          ,{' '}
          <Box className={styles.colorSuccess} component="span">
            rápidos
          </Box>{' '}
          e{' '}
          <Box className={styles.colorSuccess} component="span">
            eficazes
          </Box>
          .<br />
          Invista em uma aplicação mobile ou web.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            content="Solicitar orçamento"
            href={contacts.eMail.link}
            size="large"
          />
        </Stack>
      </Container>
    </Box>
  )
}
