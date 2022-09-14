import * as React from 'react'
import { Container, Typography, Box, Grid, Divider } from '@mui/material'

import {ServicesGridItem} from '../../organims/ServicesGridItem'
import { db as cards } from './db'
import styles from './index.module.scss'

export const Services: React.FC = () => {
  return (
    <Box id="services" className={styles.section} component="section">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className={styles.h2}>
          Nossas soluções
        </Typography>
        <Box
          justifyContent="center"
          alignContent="center"
          className={styles.divDivider}
        >
          <Divider className={styles.divider} />
        </Box>
        <Grid container spacing={2}>
          {cards.map((item, index) => (
            <ServicesGridItem key={index} item={item} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
