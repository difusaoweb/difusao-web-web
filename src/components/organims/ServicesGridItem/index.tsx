import * as React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import Image from 'next/image'

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
          <Image
            src={item.image}
            alt={item.title}
            className={styles.img}
            width={348}
            height={464}
          />
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
