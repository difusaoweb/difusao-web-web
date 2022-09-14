import React from 'react'
import { Container, Typography, Box, Grid, Divider } from '@mui/material'

import styles from './index.module.scss'
import SubestacaoImage from '../../../assets/images/about/subestacao.jpg?ts-ignore'

export const About: React.FC = () => {
  return (
    <Box id="about" className={styles.section} component="section">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              alt="Saiba mais sobre nós"
              src={SubestacaoImage.src}
              className={styles.img}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" className={styles.h2}>
              Saiba mais sobre nós
            </Typography>
            <Box
              justifyContent="center"
              alignContent="center"
              className={styles.divDivider}
            >
              <Divider className={styles.divider} />
            </Box>
            <Typography component="p" variant="subtitle1" className={styles.p}>
              Criação e Aprimoramento de Aplicações Mobile e Web.
            </Typography>
            <Typography component="p" variant="subtitle1" className={styles.p}>
              Trabalhamos com:
            </Typography>
            <ul>
              <li>Criação de Websites.</li>
              <li>Lojas Virtuais.</li>
              <li>Aplicativos.</li>
              <li>Criação de sistemas.</li>
              <li>Integrações com plataformas.</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
