'use client'
import * as React from 'react'
import {
  Container,
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Button
} from '@mui/material'

import styles from './index.module.scss'
import { db as cards } from './db'
import { Card } from '../../atoms/Card'

export const Contact: React.FC = () => {
  return (
    <Box id="contact" component="section">
      <Container maxWidth="lg">
        <Card>
          <Typography variant="h2" component="h2">
            Contato
          </Typography>
          <Grid container spacing={3} className={styles.grid}>
            {cards.map((contact, index) => (
              <Grid key={index} xs={4} md={2}>
                <Card>
                  <Button
                    variant="contained"
                    startIcon={contact.icon}
                    href={contact.link}
                    size="large"
                  >
                    {contact.title}
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  )
}
