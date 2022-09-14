import React from 'react'
import { Container, Typography, Box, Grid, Divider } from '@mui/material'

import styles from './index.module.scss'
import { db as clients } from './db'

export const Clients: React.FC = () => {
  return (
    <Box id="clients" className={styles.section} component="section">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className={styles.h2}>
          Nossos clientes
        </Typography>
        <Box
          justifyContent="center"
          alignContent="center"
          className={styles.divDivider}
        >
          <Divider className={styles.divider} />
        </Box>
        <Grid container spacing={3}>
          {clients
            .slice(0)
            .reverse()
            .map((item, index) => (
              <Grid item key={index} xs={4} md={2}>
                <Box className={styles.imageDiv}>
                  <img
                    alt={item.title}
                    src={item.image}
                    className={styles.img}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}
