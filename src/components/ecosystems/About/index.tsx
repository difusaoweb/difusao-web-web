'use client'
import * as React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'
import Image from 'next/image'

import styles from '@/components/ecosystems/About/index.module.scss'
import { Card } from '@/components/atoms/Card'

export const About: React.FC = () => {
  return (
    <Box id="about" component="section">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <Image
                src="/hero/hero.jpg"
                alt="Saiba mais sobre nós"
                width={100}
                height={100}
              />
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
