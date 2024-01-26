'use client'
import * as React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'
import Image from 'next/image'

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
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}
