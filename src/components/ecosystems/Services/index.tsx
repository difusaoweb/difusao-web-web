import * as React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'

import { ServicesGridItem } from '../../organims/ServicesGridItem'
import { db as cards } from './db'

export const Services: React.FC = () => {
  return (
    <Box id="services" component="section">
      <Container maxWidth="lg">
        <Typography component="h2" variant="h2">
          Nossas soluções
        </Typography>
        <Grid container spacing={2}>
          {cards.map((item, index) => (
            <ServicesGridItem key={index} item={item} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
