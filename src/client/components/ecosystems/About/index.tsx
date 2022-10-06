import * as React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'

import styles from './index.module.scss'
import SubestacaoImageUrl from '../../../assets/images/hero/hero.jpg'
import { Card } from '../../atoms/Card'

export const About: React.FC = () => {
  return (
    <Box id="about" component="section">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <img alt="Saiba mais sobre nós" src={SubestacaoImageUrl} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" className={styles.h2}>
              Saiba mais sobre nós
            </Typography>
            <Card>
              <Typography component="p" className={styles.p}>
                Criação e Aprimoramento de Aplicações Mobile e Web.
              </Typography>
              <Typography component="p" className={styles.p}>
                Trabalhamos com:
              </Typography>
              <ul>
                <li>Criação de Websites.</li>
                <li>Lojas Virtuais.</li>
                <li>Aplicativos.</li>
                <li>Criação de sistemas.</li>
                <li>Integrações com plataformas.</li>
              </ul>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
