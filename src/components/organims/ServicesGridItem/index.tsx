import * as React from 'react'
import { Typography, Box, Grid } from '@mui/material'

import styles from './index.module.scss'
import { CardInterface } from '../../ecosystems/Services/db'
import { Card } from '../../atoms/Card'

interface ServicesGridItemProps {
  item: CardInterface
}
export const ServicesGridItem = ({ item }: ServicesGridItemProps) => {
  return (
    <Grid item xs={6} md={3}>
      <Card>
        <Box className={styles.imagem}>
          <img className={styles.img} src={item.image} alt={item.title} />
        </Box>
        <Typography className={styles.h3} variant="h4" component="h3">
          {item.title}
        </Typography>
        <ul>
          {item.list.map((operation, index) => (
            <li key={index}>
              <Typography component="p">{operation}</Typography>
            </li>
          ))}
        </ul>
      </Card>
    </Grid>
  )
}
