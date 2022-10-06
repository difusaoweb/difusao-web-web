import * as React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'

import { db as clients } from './db'
import { Card } from '../../atoms/Card'

export const Clients: React.FC = () => {
  return (
    <Box id="clients" component="section">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2">
          Nossos clientes
        </Typography>
        <Grid container spacing={3}>
          {clients
            .slice(0)
            .reverse()
            .map((item, index) => (
              <Grid item key={index} xs={4} md={2}>
                <Card>
                  <img alt={item.title} src={item.image} />
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}
