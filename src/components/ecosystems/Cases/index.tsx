import * as React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'

import { CasesGridItem } from '../../organims/CasesGridItem'
import styles from './index.module.scss'

import { db as cases } from './db'

export const Cases: React.FC = () => {
  const carouselItens = []

  let i, j, temporary
  const chunk = 4
  for (i = 0, j = cases.length; i < j; i += chunk) {
    temporary = cases.slice(i, i + chunk)
    carouselItens.push(temporary)
  }

  return (
    <Box id="cases" component="section">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className={styles.h2}>
          Cases
        </Typography>
        <Typography className={styles.p} component="p">
          Alguns dos nossos trabalhos mais detalhadamente.
        </Typography>
        <Grid container spacing={2}>
          {cases
            .slice(0)
            .reverse()
            .map((item, index) => (
              <CasesGridItem key={index} item={item} />
            ))}
        </Grid>
      </Container>
    </Box>
  )
}
